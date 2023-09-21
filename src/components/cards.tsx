export default function Cards() {
  return (
    <>
      <div className="card">
        {/* Left Section (Image) */}
        <div className="w-1/2">
          <img className="rounded-lg" src="/template-art.png" alt="Box Art" />
        </div>

        {/* Right Section (Content) */}
        <div className="w-1/2">
          <div className="space-y-2">
            <div className="font-bold text-2xl">Anime Name</div>
            <p className="text-sm text-accent">Released July 2023</p>
          </div>
          <div className="grid mt-3">
            <button className="btn btn-primary-outline">Edit</button>
            <button className="btn btn-dark">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
