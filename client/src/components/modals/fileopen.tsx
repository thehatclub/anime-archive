import { Loading } from "../";
import { useCallback, useState } from "react";
import axios from "axios";

type ListOpenProps = {
  toggleModal: () => void;
  setXmlData: (data: any) => void;
  xmlData: any;
};

export default function FileOpen({ toggleModal, setXmlData }: ListOpenProps) {
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
