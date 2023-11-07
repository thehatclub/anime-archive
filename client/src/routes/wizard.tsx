import { useState } from "react";
import { Navbar, Card, Sidebar, Modal } from "../components";

export default function Wizard() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalType, setModalType] = useState("listOpen"); // 'listopen' 'edit' or 'delete'
  const [file, setFile] = useState<File | null>(null);
  const [xmlData, setXmlData] = useState(null);

  const openModal = (modal: string) => {
    setModalType(modal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {xmlData && (
        <div className={isModalOpen ? "blur" : ""}>
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
      )}

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
