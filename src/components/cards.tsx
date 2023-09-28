export default function Cards() {
  return (
    <>
      <div className="border-2 border-dark-800 p-6 rounded-lg">
        <img
          src="/template-art.png"
          alt="Box Art"
          className="object-cover object-center w-full rounded-lg h-72 "
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm text-light-200 uppercase">
            Released July 2023
          </span>
          <h2 className="text-xl uppercase">Anime name</h2>
        </div>
        <div>
          <button className="btn btn-primary-outline">Edit</button>
          <button className="btn btn-dark">Delete</button>
        </div>
      </div>
    </>
  );
}
