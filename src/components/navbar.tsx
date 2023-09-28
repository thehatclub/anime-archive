export default function Navbar() {
  return (
    <>
      <header className="p-5 border-b border-dark-800 bg-dark-900 shadow-lg">
        <div className="grid md:flex gap-5 justify-center lg:justify-start">
          <a href="/" className="flex items-center p-2">
            <img src="/logo.png" alt="logo" width={50} />
            <h1 className="ml-3 text-2xl underline">Anime Archive</h1>
          </a>
          <button className="md:hidden -mb-4">
            <i className="fa-solid fa-caret-down"></i>
          </button>
          <ul className="hidden gap-3">
            <li className="flex">
              <a href="#" className="list-item">
                All Anime
              </a>
            </li>
            <li className="flex">
              <a href="#" className="list-item">
                Watching
              </a>
            </li>
            <li className="flex">
              <a href="#" className="list-item">
                Completed
              </a>
            </li>
            <li className="flex">
              <a href="#" className="list-item">
                Oh-Hold
              </a>
            </li>
            <li className="flex">
              <a href="#" className="list-item list-active">
                Dropped
              </a>
            </li>
            <li className="flex">
              <a href="#" className="list-item">
                Planned
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
