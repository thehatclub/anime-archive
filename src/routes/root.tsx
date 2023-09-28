export default function root() {
  return (
    <div className="h-screen flex justify-center items-center mx-5">
      <div className="container relative">
        <img src="/logo.png" alt="logo" width={300} className="eye" />
        <div className="text-center bg-dark relative z-10 p-1">
          <div className="m-2 space-y-2">
            <h1 className="text-2xl md:text-3xl leading-none">
              <span className="special-header">WELCOME TO THE</span>
              <br />
              <span className="underline text-accent text-4xl md:text-5xl">
                ANIME ARCHIVE
              </span>
            </h1>
            <p className="text-lg md:text-xl">
              A place where you can confidently edit your anime needs
            </p>
          </div>

          {/* Before Login Buttons */}
          <div className="hidden">
            <a href="#" className="btn btn-primary">
              Sign In<i className="fa-solid fa-right-to-bracket"></i>
            </a>
            <a href="#" className="btn btn-light">
              MAL<i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>

          {/* Post Login Buttons */}
          <div className="py-5">
            <a href="wizard" className="btn btn-primary">
              List Wizard<i className="fa-solid fa-hat-wizard"></i>
            </a>
            <a href="#" className="btn btn-dark">
              Sign Out<i className="fa-solid fa-right-from-bracket"></i>
            </a>
          </div>
          {/* End Buttons */}
        </div>
      </div>
    </div>
  );
}
