import { Card } from ".";

function ListOpen({ onClose }: any) {
  return (
    <>
      <div className="bg-dark-900 max-w-screen max-h-screen">
        <div className="button-group">
          <button className="btn btn-accent" onClick={onClose}>
            <i className="fa-solid fa-network-wired"></i> <span>Open MAL</span>
          </button>
          <button className="btn btn-light-outline" onClick={onClose}>
            <i className="fa-solid fa-file-signature"></i>
            <span>Open File</span>
          </button>
        </div>
      </div>
    </>
  );
}

function EditModal({ onClose }: any) {
  return (
    <div className="bg-dark-900 md:border-2 md:border-dark-800 rounded-lg max-w-full max-h-full overflow-y-auto hide-scroll p-6">
      <form action="post">
        <fieldset className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-center">
          <Card modalStatus={true} />
          <div className="grid grid-cols-6 col-span-full lg:col-span-3 gap-5">
            <div className="col-span-full">
              <label htmlFor="status" className="text-sm">
                Status
              </label>
              <select name="status" className="w-full form-control">
                <option value="">Choose a Status:</option>
                <option value="current">Currently Watching</option>
                <option value="completed">Completed</option>
                <option value="hold">On-Hold</option>
                <option value="dropped">Dropped</option>
                <option value="planned">Plan to Watch</option>
              </select>
            </div>
            <div className="col-span-full">
              <label htmlFor="episodes" className="text-sm">
                Episodes
              </label>
              <input type="number" className="w-full form-control" min="0" />
            </div>
            <div className="button-group justify-self-end">
              <button className="btn btn-primary">
                <span>Save Changes</span>
              </button>
              <button className="btn btn-light-outline">
                <span>Delete</span>
              </button>
              <button className="btn btn-dark items-center" onClick={onClose}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

function DeleteModal({ onClose }: any) {
  return (
    <div className="bg-dark-900 md:border-2 md:border-dark-800 rounded-lg max-w-full max-h-full overflow-y-auto hide-scroll p-6">
      <form action="post">
        <fieldset className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-center">
          <Card modalStatus={true} />
          <div className="grid grid-cols-6 col-span-full lg:col-span-3 gap-5">
            <div className="col-span-full text-center space-y-5">
              <h1>Are you sure you want to delete this?</h1>
              <div className="button-group justify-center">
                <button className="btn btn-accent-outline">
                  <span>Yes Delete</span>
                </button>
                <button className="btn btn-dark" onClick={onClose}>
                  <span>Cancel</span>
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default function Modal({ type, onClose }: any) {
  return (
    <>
      {type === "listOpen" ? (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-dark-900">
          <ListOpen onClose={onClose} />
        </div>
      ) : type !== "listOpen" ? (
        <div className="fixed md:static top-0 left-0 w-full h-full md:w-auto md:h-auto md:bg-opacity-0 flex items-center justify-center bg-dark-900 md:m-6">
          {type === "edit" ? (
            <EditModal onClose={onClose} />
          ) : type === "delete" ? (
            <DeleteModal onClose={onClose} />
          ) : null}
        </div>
      ) : null}
    </>
  );
}
