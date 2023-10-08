export default function root() {
  return (
    <>
      <section className="h-screen flex justify-center items-center overscroll-none">
        <img src="/logo.png" alt="logo" className="eye" />
        <div className="relative container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <div className="bg-dark">
            <h1 className="leading-none">
              <span className="text-3xl sm:text-4xl">WELCOME TO THE</span>
              <br />
              <span className="text-4xl sm:text-5xl underline text-accent">
                ANIME ARCHIVE
              </span>
            </h1>
            <p className="px-8 mt-8 mb-2 text-lg">
              A place where you can store your progress offline
            </p>
          </div>
          <div className="hidden button-group justify-center">
            <a className="btn btn-primary">
              <i className="fa-solid fa-right-to-bracket"></i>
              <span>Sign In</span>
            </a>
            <a className="btn btn-dark">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
              <span>My Anime List</span>
            </a>
          </div>
          <div className="button-group justify-center">
            <a href="wizard" className="btn btn-primary">
              <i className="fa-solid fa-hat-wizard"></i>
              <span>List Wizard</span>
            </a>
            <a href="#" className="btn btn-dark">
              <i className="fa-solid fa-right-from-bracket"></i>
              <span>Sign Out</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
