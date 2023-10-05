export default function Edit({ onClose }: any) {
  return (
    <>
      <section className="flex relative p-6 m-7 bg-dark-900 border-2 border-dark-800 rounded-lg">
        <button className="close" onClick={onClose}>
          <i className="fa-solid fa-square-xmark fa-2xl"></i>
        </button>
        <form action="post">
          <fieldset className="grid grid-cols-4 gap-5 items-center">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <img
                src="/template-art.png"
                alt="Box Art"
                className="object-cover object-center w-full rounded-lg h-72 p-4"
              />

              <div className="mt-6 mb-2 text-center">
                <span className="block text-sm text-light-200 uppercase">
                  Released July 2023
                </span>
                <h2 className="text-xl uppercase">Anime name</h2>
              </div>
            </div>
            <div className="grid grid-cols-6 col-span-full lg:col-span-3 gap-5">
              <div className="col-span-full">
                <label htmlFor="username" className="text-sm">
                  Status
                </label>
                <select
                  name="status"
                  className="w-full rounded-lg bg-dark text-light-200"
                >
                  <option value="">Choose a Status:</option>
                  <option value="current">Currently Watching</option>
                  <option value="completed">Completed</option>
                  <option value="hold">On-Hold</option>
                  <option value="dropped">Dropped</option>
                  <option value="planned">Plan to Watch</option>
                </select>
              </div>
              <div className="col-span-full">
                <label htmlFor="website" className="text-sm">
                  Episodes
                </label>
                <input
                  type="number"
                  className="w-full rounded-lg bg-dark text-light-200"
                  min="0"
                />
              </div>

              <div className="col-span-full flex flex-wrap gap-5 lg:flex-row-reverse">
                <button className="btn btn-primary m-0 w-full lg:w-auto">
                  <i className="fa-solid fa-floppy-disk m-0 mr-2"></i>Save
                  Changes
                </button>

                <button className="btn btn-danger-outline m-0 w-full lg:w-auto">
                  <i className="fa-solid fa-trash m-0 mr-2"></i>Delete
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
}
