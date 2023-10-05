export default function Sidebar() {
  return (
    <>
      <div className="p-3 space-y-2 border-2 border-dark-800 p-5 rounded-lg">
        <div className="flex place-content-center p-2 space-x-4">
          <img
            src="profile.jpg"
            alt="MAL Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-lg">MAL Username</h2>
            <span className="flex items-center space-x-1">
              <a href="#" className="text-sm hover:underline text-light-200">
                View profile
              </a>
            </span>
          </div>
        </div>
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
              <a href="#" className="flex items-center p-2 space-x-3 current">
                <span>
                  <i className="fa-solid fa-circle"></i>Currently Watching
                </span>
              </a>
            </li>
            <li className="btn-dark rounded-lg">
              <a href="#" className="flex items-center p-2 space-x-3 complete">
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
    </>
  );
}
