export default function Cards({ onEditClick }: any) {
  return (
    <>
      <div className="grid md:grid-cols-1 md:gap-0 gap-7 grid-cols-2 bg-dark-900 border-2 border-dark-800 p-6 rounded-lg">
        <img
          src="/template-art.png"
          alt="Box Art"
          className="object-cover object-center w-full rounded-lg h-72"
        />
        <div className="text-center">
          <div className="mt-6 mb-2">
            <span className="block text-sm text-light-200 uppercase">
              Released July 2023
            </span>
            <h2 className="text-xl uppercase">Anime name</h2>
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-3">
            <button
              className="btn btn-light-outline mx-0"
              onClick={onEditClick}
            >
              Edit
            </button>
            <button className="btn btn-dark mx-0">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
