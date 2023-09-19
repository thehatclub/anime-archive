export default function Root() {
  return (
    <div className="h-screen grid place-items-center">
      <img src="/logo.png" alt="logo" width={300} className="eye" />
      <div className="text-center z-10 bg-background">
        <div className="m-3">
          <h1 className="text-5xl leading-snug">
            WELCOME TO THE
            <br />
            <span className="text-accent">ANIME ARCHIVE</span>
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
  );
}
