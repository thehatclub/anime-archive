import React from "react";
import { Sidebar } from ".";

export default function Navbar({ xmlData }: any) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 p-5 border-b-2 border-dark-800 bg-dark-900">
        <div className="grid lg:flex gap-5 justify-center lg:justify-start">
          <a href="/" className="flex items-center p-2">
            <img src="/logo.png" alt="logo" width={50} />
            <h1 className="ml-3 text-2xl underline">Anime Archive</h1>
          </a>

          <div className={`${isMenuOpen ? "block" : "hidden"} lg:hidden`}>
            <Sidebar xmlData={xmlData} />
          </div>
          <button className="lg:hidden -my-8" onClick={toggleMenu}>
            <i
              className={`fa-solid fa-xl ${
                isMenuOpen ? "fa-caret-up" : "fa-caret-down"
              }`}
            ></i>
          </button>
        </div>
      </header>
    </>
  );
}
