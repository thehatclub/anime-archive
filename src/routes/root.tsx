export default function root() {
  return (
    <div className="h-screen flex justify-center items-center mx-5">
      <div className="container relative md:max-w-2xl">
        <img src="/logo.png" alt="logo" width={300} className="eye" />
        <div className="text-center bg-dark relative z-10 p-1 rounded-lg shadow-md shadow-dark-600">
          <div className="m-3">
            <h1 className="text-xl md:text-4xl leading-relaxed">
              WELCOME TO THE
              <br />
              <span className="text-3xl md:text-6xl text-accent">
                ANIME ARCHIVE
              </span>
            </h1>
            <p className="text-lg">
              A place where you can confidently edit your anime needs
            </p>
          </div>
          <div className="hidden">
            <a href="#" className="btn btn-primary">
              Sign In <i className="fa-solid fa-right-to-bracket"></i>
            </a>
            <a href="#" className="btn btn-light">
              MAL <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
          <div className="flex flex-wrap justify-center mb-2">
            <a href="/wizard" className="btn btn-primary">
              List Wizard <i className="fa-solid fa-hat-wizard"></i>
            </a>
            <a href="#" className="btn btn-dark">
              Sign Out <i className="fa-solid fa-right-from-bracket"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
