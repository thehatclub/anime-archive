export default function Edit({ toggleModal }: any) {
  return (
    <div className="max-w-full max-h-full overflow-y-auto hide-scroll ">
      <form action="post">
        <fieldset className="button-group place-content-center p-6">
          {/* <Card modalStatus={true} /> */}
          <div className="grid col-span-full space-y-5">
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
              <button
                className="btn btn-dark items-center"
                onClick={toggleModal}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
