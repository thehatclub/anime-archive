export default function Navbar() {
  return (
    <>
      <nav className="flex p-5 items-center justify-center sm:justify-between">
        <a href="/" className="text-lg hidden sm:block">
          <i className="fa-solid fa-caret-left"></i>{" "}
          <span className="underline uppercase">Back</span>
        </a>
        <a className="flex items-center" href="/">
          <img src="/logo.png" alt="logo" width={50} />
          <h1 className="ml-3 text-2xl underline">Anime Archive</h1>
        </a>
        <div className="hidden sm:block"></div>
        {/* Empty div to create space */}
      </nav>
    </>
  );
}
