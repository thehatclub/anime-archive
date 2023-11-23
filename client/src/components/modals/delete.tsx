export default function Delete({ toggleModal }: any) {
  return (
    <div className="max-w-screen max-h-screen overflow-y-auto hide-scroll">
      <form action="post">
        <fieldset className="button-group place-content-center p-6">
          {/* <Card /> */}
          <div className="text-center space-y-5">
            <h1>Are you sure you want to delete this?</h1>
            <div className="button-group justify-center">
              <button className="btn btn-accent-outline">
                <span>Yes Delete</span>
              </button>
              <button className="btn btn-dark" onClick={toggleModal}>
                <span>Cancel</span>
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
