export default function Card({ onEditClick }: any) {
  return (
    <>
      <div className="rounded-md bg-dark-900 border-2 border-dark-800 p-4 space-y-3">
        <img
          src="/template-art.png"
          alt="Box Art"
          className="object-cover object-center w-full rounded-md h-56"
        />
        <div className="flex flex-col space-y-4">
          <div className="space-y-2 text-center">
            <p className="text-dark-300 text-sm">Released July 2023</p>
            <h2 className="text-2xl">Anime Name</h2>
          </div>
          <div className="btn text-md py-1 btn-dark">
            <i className="fa-solid fa-hourglass-half"></i>
            <span>Currently Watching</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className="btn btn-primary m-0" onClick={onEditClick}>
              <i className="fa-solid fa-pen-to-square"></i>
              <span>Edit</span>
            </button>
            <button className="btn btn-light-outline m-0">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
