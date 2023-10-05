import { Navbar, Cards, Sidebar, Edit } from "../components";
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
        <section className="w-full mx-auto px-4 m-4">
          <div className="grid lg:grid-cols-12 gap-5 p-4 m-2">
            <main className="col-span-full lg:col-span-9 p-4">
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <Cards onEditClick={openEditModal} />
                <Cards onEditClick={openEditModal} />
                <Cards onEditClick={openEditModal} />
              </div>
            </main>
            <aside className="hidden lg:col-span-3 lg:block p-2">
              <Sidebar />
            </aside>
          </div>
        </section>
      </div>

      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Edit onClose={closeEditModal} />
        </div>
      )}
    </>
  );
}
