export default function Sidebar() {
  return (
    <>
      <div className="lg:fixed h-auto lg:h-screen bg-dark-900 lg:border-r-2 border-dark-800 p-5">
        <div className="space-y-3">
          <div className="flex items-center p-2 mb-12 space-x-4 justify-self-end">
            <img src="profile.jpg" alt="" className="w-12 h-12 rounded-lg" />
            <div>
              <h2 className="text-lg">MAL Username</h2>
              <span className="flex items-center space-x-1">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline text-dark-300"
                >
                  View profile
                </a>
              </span>
            </div>
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 -left-3 flex items-center py-4">
              <button type="submit" className="p-2">
                <i className="fa-solid fa-magnifying-glass text-dark-600"></i>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-full py-2 pl-10 text-sm rounded-lg bg-dark"
            />
          </div>
          <div className="flex-1 divide-y">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="btn-light-outline rounded-lg">
                <a href="#" className="flex items-center p-2 space-x-3">
                  <span>
                    <i className="fa-solid fa-border-all"></i>All Anime
                  </span>
                </a>
              </li>
              <li className="btn-dark rounded-lg">
                <a href="#" className="flex items-center p-2 space-x-3 current">
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
      </div>
    </>
  );
}
