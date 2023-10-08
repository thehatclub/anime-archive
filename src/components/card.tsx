export default function Card({ onEditClick }: any) {
  return (
    <>
      <div className="rounded-md bg-dark-900 border-2 border-dark-800">
        <img
          src="/template-art.png"
          alt="Box Art"
          className="object-cover object-center w-full rounded-t-md h-72"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <p className="text-dark-300 text-sm">Released July 2023</p>
            <h2 className="text-2xl">Anime Name</h2>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className="btn btn-light-outline m-0" onClick={onEditClick}>
              Edit
            </button>
            <button className="btn btn-dark m-0">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
