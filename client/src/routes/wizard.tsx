import { useState } from "react";
import { Navbar, Card, Sidebar, Modal } from "../components";

export default function Wizard() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalType, setModalType] = useState("listOpen"); // 'listopen' 'edit' or 'delete'
  const [xmlData, setXmlData] = useState(null);

  const toggleModal = (modal: string) => {
    setModalType(modal);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {xmlData && (
        <div>
          <Navbar xmlData={xmlData} />
          <div className="flex flex-col lg:flex-row">
            <aside className="w-1/6 hidden lg:block sidebar">
              <Sidebar />
            </aside>
            <section className="w-full pt-24 lg:pt-20">
              <div className="grid gap-5 p-4 m-2">
                <main className="col-span-full p-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Card
                      onEditClick={() => toggleModal("edit")}
                      onDeleteClick={() => toggleModal("delete")}
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
            toggleModal={toggleModal}
            xmlData={xmlData}
            setXmlData={setXmlData}
          />
        </div>
      )}
    </>
  );
}
