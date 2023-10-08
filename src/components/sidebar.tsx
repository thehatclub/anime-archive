export default function Sidebar() {
  return (
    <>
      <div className="lg:fixed h-auto lg:h-screen bg-dark-900 lg:border-r-2 border-dark-800 p-5">
        <div className="space-y-3">
          <div className="flex items-center p-2 mb-12 space-x-4 justify-self-end">
            <img
              src="profile.jpg"
              alt="MAL Profile"
              className="w-12 h-12 rounded-md"
            />
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
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button type="button" title="search" className="p-1">
                <i className="fa-solid fa-magnifying-glass w-4 h-4"></i>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="pl-10 w-full form-control"
            />
          </div>

          <div className="divide-y">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="btn-primary-iout">
                <a href="#" className="list-item">
                  <span>All Anime</span>
                </a>
              </li>
              <li>
                <a href="#" className="list-item">
                  <span>Currently Watching</span>
                </a>
              </li>
              <li>
                <a href="#" className="list-item">
                  <span>Completed</span>
                </a>
              </li>
              <li>
                <a href="#" className="list-item">
                  <span>On-Hold</span>
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <span className="list-item">
                    <span>Dropped</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="list-item">
                  <span>Plan to Watch</span>
                </a>
              </li>
            </ul>
            <ul className="pt-4 pb-2 space-y-1 text-sm">
              <li>
                <a href="#" className="list-item">
                  <i className="fa-solid fa-right-from-bracket"></i>
                  <span>Sign Out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
