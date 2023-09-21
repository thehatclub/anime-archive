export default function Navbar() {
  return (
    <>
      <nav className="flex items-center sm:justify-between justify-center p-5">
        <a href="/" className="text-lg hidden sm:block">
          <i className="fa-solid fa-caret-left"></i> Back
        </a>
        <a className="flex items-center" href="/">
          <img src="/logo.png" alt="logo" width={50} />
          <h1 className="ml-5 text-3xl">Anime Archive</h1>
        </a>
        <div className="w-12 hidden sm:block"></div>{" "}
        {/* Empty div to create space */}
      </nav>
    </>
  );
}
