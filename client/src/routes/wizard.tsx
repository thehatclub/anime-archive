import { Navbar, Card, Sidebar, Modal } from "../components";
import React from "react";

export default function Wizard() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState(""); // 'edit' or 'delete'
  const isBlurred = isModalOpen;

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
      <div className={isBlurred ? "blur" : ""}>
        <Navbar />
        <div className="flex flex-col lg:flex-row">
          <aside className="w-1/6 hidden lg:block sidebar">
            <Sidebar />
          </aside>
          <section className="w-full pt-24 lg:pt-20">
            <div className="grid gap-5 p-4 m-2">
              <main className="col-span-full p-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  <Card
                    onEditClick={() => openModal("edit")}
                    onDeleteClick={() => openModal("delete")}
                  />
                  <Card
                    onEditClick={() => openModal("edit")}
                    onDeleteClick={() => openModal("delete")}
                  />
                  <Card
                    onEditClick={() => openModal("edit")}
                    onDeleteClick={() => openModal("delete")}
                  />
                  <Card
                    onEditClick={() => openModal("edit")}
                    onDeleteClick={() => openModal("delete")}
                  />
                  <Card
                    onEditClick={() => openModal("edit")}
                    onDeleteClick={() => openModal("delete")}
                  />
                  <Card
                    onEditClick={() => openModal("edit")}
                    onDeleteClick={() => openModal("delete")}
                  />
                </div>
              </main>
            </div>
          </section>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Modal type={modalType} onClose={closeModal} />
        </div>
      )}
    </>
  );
}
