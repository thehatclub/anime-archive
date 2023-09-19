export default function Root() {
  return (
    <div className="h-screen grid place-items-center">
      <div className="container relative">
        <img src="/logo.png" alt="logo" width={300} className="eye" />
        <div className="text-center bg-background relative z-10 p-1">
          <div className="m-3">
            <h1 className="text-3xl md:text-4xl leading-snug">
              WELCOME TO THE
              <br />
              <span className="text-5xl md:text-6xl text-accent">
                {" "}
                ANIME ARCHIVE
              </span>
            </h1>
            <p className="text-lg">
              A place where you can confidently edit your anime needs
            </p>
          </div>
          <div className="gap-1">
            <a href="#" className="btn btn-primary">
              Sign In <i className="fa-solid fa-right-to-bracket"></i>
            </a>
            <a href="#" className="btn btn-light">
              MyAnimeList{" "}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
