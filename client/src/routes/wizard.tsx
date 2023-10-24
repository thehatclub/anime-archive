import { Navbar, Card, Sidebar, Modal } from "../components";
import React from "react";

export default function Wizard() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState(""); // 'edit' or 'delete'
  const isBlurred = isModalOpen;
  const [file, setFile] = React.useState<File | null>(null);
  const [xmlData, setXmlData] = React.useState(null);

  const openModal = (modal: string) => {
    setModalType(modal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  React.useEffect(() => {
    setModalType("listOpen");
    setIsModalOpen(true);
  }, []);

  return (
    <>
      {xmlData ? (
        <div className={isBlurred ? "blur" : ""}>
          <Navbar xmlData={xmlData} />
          <div className="flex flex-col lg:flex-row">
            <aside className="w-1/6 hidden lg:block sidebar">
              <Sidebar xmlData={xmlData} />
            </aside>
            <section className="w-full pt-24 lg:pt-20">
              <div className="grid gap-5 p-4 m-2">
                <main className="col-span-full p-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Card
                      onEditClick={() => openModal("edit")}
                      onDeleteClick={() => openModal("delete")}
                      xmlData={xmlData}
                    />
                  </div>
                </main>
              </div>
            </section>
          </div>
        </div>
      ) : !xmlData ? (
        <div className={isBlurred ? "blur" : ""}>
          <Navbar />
          <div className="h-screen flex justify-center items-center overscroll-none">
            <section className="w-full text-center space-y-5 p-5">
              <h1 className="text-2xl">
                Currently only File Upload is supported
              </h1>
              <a
                className="btn btn-accent w-auto"
                onClick={() => window.location.reload()}
                href="#"
              >
                File Choice
              </a>
            </section>
          </div>
        </div>
      ) : null}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Modal
            type={modalType}
            onClose={closeModal}
            file={file}
            setFile={setFile}
            setXmlData={setXmlData}
          />
        </div>
      )}
    </>
  );
}
