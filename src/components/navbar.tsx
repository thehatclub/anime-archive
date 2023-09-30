import React from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="p-5 border-b border-dark-800 bg-dark-900 shadow-lg">
        <div className="grid lg:flex gap-5 justify-center lg:justify-start">
          <a href="/" className="flex items-center p-2">
            <img src="/logo.png" alt="logo" width={50} />
            <h1 className="ml-3 text-2xl underline">Anime Archive</h1>
          </a>

          <div className={`${isMenuOpen ? "block" : "hidden"} lg:hidden`}>
            <div className="divide-y">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="btn-light-outline rounded-lg">
                  <a href="#" className="flex items-center p-2 space-x-3">
                    <span>
                      <i className="fa-solid fa-border-all"></i>All Anime
                    </span>
                  </a>
                </li>
                <li className="btn-dark rounded-lg">
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-3 current"
                  >
                    <span>
                      <i className="fa-solid fa-circle"></i>Currently Watching
                    </span>
                  </a>
                </li>
                <li className="btn-dark rounded-lg">
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-3 complete"
                  >
                    <span>
                      <i className="fa-solid fa-circle"></i>Completed
                    </span>
                  </a>
                </li>
                <li className="btn-dark rounded-lg">
                  <a href="#" className="flex items-center p-2 space-x-3 hold">
                    <span>
                      <i className="fa-solid fa-circle"></i>On-Hold
                    </span>
                  </a>
                </li>
                <li className="btn-dark rounded-lg">
                  <a href="#" className="flex items-center p-2 space-x-3 drop">
                    <span>
                      <i className="fa-solid fa-circle"></i>Dropped
                    </span>
                  </a>
                </li>
                <li className="btn-dark rounded-lg">
                  <a href="#" className="flex items-center p-2 space-x-3 plan">
                    <span>
                      <i className="fa-solid fa-circle"></i>Plan to Watch
                    </span>
                  </a>
                </li>
              </ul>
              <ul className="pt-4 pb-2 space-y-1 text-sm">
                <li className="btn-dark rounded-lg">
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-lg"
                  >
                    <span>
                      <i className="fa-solid fa-right-from-bracket"></i>Sign Out
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button className="lg:hidden -mb-4" onClick={toggleMenu}>
            <i
              className={`fa-solid ${
                isMenuOpen ? "fa-caret-up" : "fa-caret-down"
              }`}
            ></i>
          </button>
        </div>
      </header>
    </>
  );
}
