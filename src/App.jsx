import "./App.css";
export default function App() {
  return (
    <>
      <img src="/logo.png" className="homeLogo" />
      <div className="container homeContainer">
        <div className="homeTitle">
          <h2 className="ts">Welcome to the</h2>
          <h1 className="accent">Anime Archive</h1>
        </div>
        <p>A place where you can store your progress offline</p>
        <div className="btn-group">
          <button className="btn-primary">
            <i className="fa-solid fa-arrows-spin"></i>
            <span>File Convert</span>
          </button>
          <button className="btn-secondary">
            <i className="fa-solid fa-hat-wizard"></i>
            <span>Wizard Editor</span>
          </button>
        </div>
      </div>
    </>
  );
}
