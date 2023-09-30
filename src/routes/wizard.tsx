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
        <div className="flex place-content-center lg:justify-between m-7">
          <div className="grid md:grid-cols-2 lg:flex lg:flex-wrap gap-7">
            <Cards onEditClick={openEditModal} />
          </div>
          <Sidebar />
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
