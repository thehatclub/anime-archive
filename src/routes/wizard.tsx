import { Navbar, Card, Sidebar, Edit } from "../components";
import React from "react";

export default function Wizard() {
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);
    document.getElementById("wizard")?.classList.add("blur");
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    document.getElementById("wizard")?.classList.remove("blur");
  };
  return (
    <>
      <div id="wizard">
        <Navbar />
        <div className="flex flex-col lg:flex-row">
          <aside className="w-1/5 hidden lg:block sidebar">
            <Sidebar />
          </aside>
          <section className="w-full mx-auto px-4 m-4 pt-20">
            <div className="grid gap-5 p-4 m-2">
              <main className="col-span-full p-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  <Card onEditClick={openEditModal} />
                  <Card onEditClick={openEditModal} />
                  <Card onEditClick={openEditModal} />
                </div>
              </main>
            </div>
          </section>
        </div>
      </div>
      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Edit onClose={closeEditModal} />
        </div>
      )}
    </>
  );
}
