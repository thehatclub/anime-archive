// Importing required dependencies
import { Card, Loading } from ".";
import { useCallback, useState } from "react";
import axios from "axios";

type ListOpenProps = {
  toggleModal: () => void;
  setXmlData: (data: any) => void;
  xmlData: any;
};

function ListOpen({ toggleModal, setXmlData }: ListOpenProps) {
  const [isFormHidden, setIsFormHidden] = useState(true);
  const [isFileLoading, setIsFileLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      if (!file) return;
      setIsFileLoading(true);

      // Read the content of the XML file
      const reader = new FileReader();
      reader.onload = async (e) => {
        const xmlContent = e.target?.result as string;

        try {
          const apiURL = import.meta.env.DEV
            ? import.meta.env.VITE_API_URL
            : import.meta.env.VITE_PROD_URL;

          const response = await axios.post(`${apiURL}/convert`, xmlContent, {
            headers: {
              "Content-Type": "application/xml",
            },
          });
          setXmlData(response.data.data);
          setIsFileLoading(false);
          toggleModal();
        } catch (error) {
          console.log("Error uploading XML data: " + error);
          setError("Error uploading XML data: " + error);
          setIsFileLoading(false);
        }
      };

      // Read the content of the file as text
      reader.readAsText(file);
    },
    [file]
  );

  // Handle the loading state in the UI
  if (isFileLoading) {
    return <Loading />;
  }

  // Render the form
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`${isFileLoading ? "opacity-30" : ""}`}
      >
        <div
          className={`${
            isFormHidden ? "hidden" : ""
          } button-group place-content-center p-5`}
        >
          <input
            type="file"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            className="btn border-2 border-dashed"
          />
          <button type="submit" className="btn btn-accent">
            Submit
          </button>
        </div>
        <div
          className={`${
            isFormHidden ? "" : "hidden"
          } bg-dark-900 max-w-screen max-h-screen`}
        >
          <div className="button-group">
            <button className="btn btn-accent" onClick={toggleModal} disabled>
              <i className="fa-solid fa-network-wired"></i>{" "}
              <span>Open MAL</span>
            </button>
            <button
              className="btn btn-light-outline"
              onClick={() => setIsFormHidden(!isFormHidden)}
            >
              <i className="fa-solid fa-file-signature"></i>
              <span>Open File</span>
            </button>
          </div>
        </div>
      </form>
      {error && <div className="error">{error}</div>}
    </>
  );
}

function EditModal({ toggleModal }: any) {
  return (
    <div className="max-w-full max-h-full overflow-y-auto hide-scroll ">
      <form action="post">
        <fieldset className="button-group place-content-center p-6">
          <Card modalStatus={true} />
          <div className="grid col-span-full space-y-5">
            <div className="col-span-full">
              <label htmlFor="status" className="text-sm">
                Status
              </label>
              <select name="status" className="w-full form-control">
                <option value="">Choose a Status:</option>
                <option value="current">Currently Watching</option>
                <option value="completed">Completed</option>
                <option value="hold">On-Hold</option>
                <option value="dropped">Dropped</option>
                <option value="planned">Plan to Watch</option>
              </select>
            </div>
            <div className="col-span-full">
              <label htmlFor="episodes" className="text-sm">
                Episodes
              </label>
              <input type="number" className="w-full form-control" min="0" />
            </div>
            <div className="button-group justify-self-end">
              <button className="btn btn-primary">
                <span>Save Changes</span>
              </button>
              <button className="btn btn-light-outline">
                <span>Delete</span>
              </button>
              <button
                className="btn btn-dark items-center"
                onClick={toggleModal}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

function DeleteModal({ toggleModal }: any) {
  return (
    <div className="max-w-screen max-h-screen overflow-y-auto hide-scroll">
      <form action="post">
        <fieldset className="button-group place-content-center p-6">
          <Card />
          <div className="text-center space-y-5">
            <h1>Are you sure you want to delete this?</h1>
            <div className="button-group justify-center">
              <button className="btn btn-accent-outline">
                <span>Yes Delete</span>
              </button>
              <button className="btn btn-dark" onClick={toggleModal}>
                <span>Cancel</span>
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default function Modal({ type, toggleModal, xmlData, setXmlData }: any) {
  enum ModalType {
    ListOpen = "listOpen",
    Edit = "edit",
    Delete = "delete",
  }
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-dark-900">
        {type == ModalType.ListOpen ? (
          <ListOpen
            toggleModal={toggleModal}
            xmlData={xmlData}
            setXmlData={setXmlData}
          />
        ) : type === ModalType.Edit ? (
          <EditModal toggleModal={toggleModal} />
        ) : type === ModalType.Delete ? (
          <DeleteModal toggleModal={toggleModal} />
        ) : null}
      </div>
    </>
  );
}
