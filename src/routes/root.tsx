export default function root() {
  return (
    <>
      <section className="h-screen flex justify-center items-center">
        <div className="relative container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <img src="/logo.png" alt="logo" width={300} className="eye" />
          <div className="bg-dark z-10">
            <h1 className="leading-none ">
              <span className="text-3xl sm:text-4xl special-header">
                WELCOME TO THE
              </span>
              <br />
              <span className="text-4xl sm:text-5xl underline text-accent">
                ANIME ARCHIVE
              </span>
            </h1>
            <p className="px-8 mt-8 mb-12 text-lg">
              A place where you can confidently edit your anime needs
            </p>
          </div>
          <div className="hidden flex flex-wrap justify-center">
            <a className="btn btn-primary">
              Sign In<i className="fa-solid fa-right-to-bracket"></i>
            </a>
            <a className="btn btn-dark">
              My Anime List
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
          <div className=" flex flex-wrap justify-center">
            <a href="wizard" className="btn btn-primary">
              List Wizard<i className="fa-solid fa-hat-wizard"></i>
            </a>
            <a href="#" className="btn btn-dark">
              Sign Out<i className="fa-solid fa-right-from-bracket"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
