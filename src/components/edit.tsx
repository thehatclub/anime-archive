export default function Edit({ onClose }: any) {
  return (
    <>
      <section className="flex relative p-6 m-7 bg-dark-900 border-2 border-dark-800 rounded-lg">
        <form action="post">
          <fieldset className="grid grid-cols-4 gap-5 items-center">
            <div className="max-w-xs rounded-lg col-span-full lg:col-span-1 text-center justify-self-center">
              <img
                src="/template-art.png"
                alt="Box Art"
                className="object-cover object-center w-full rounded-md h-72"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <p className="text-dark-300">Released Month Year</p>
                  <h2 className="text-3xl">Anime Name</h2>
                </div>
              </div>
            </div>

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

              <div className="button-group lg:flex-row-reverse">
                <button className="btn btn-primary">
                  <i className="fa-solid fa-floppy-disk"></i>
                  <span>Save Changes</span>
                </button>

                <button className="btn btn-light-outline">
                  <i className="fa-solid fa-trash"></i>
                  <span>Delete</span>
                </button>

                <button className="btn btn-dark " onClick={onClose}>
                  <i className="fa-solid fa-square-xmark"></i>
                  <span>Close</span>
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
}
