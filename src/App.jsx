import "./App.css";
import React, { useState } from "react";
import DragDrop from "./components/DragDrop";

export default function App() {
  const [drop, setDrop] = useState(false);

  return (
    <>
      <img src="/logo.png" className="homeLogo" />
      <div className="container homeContainer">
        <div className="homeTitle">
          <h2 className="ts">Welcome to the</h2>
          <h1 className="accent">Anime Archive</h1>
        </div>
        <p>A place where you can store your progress offline</p>
        <div>
          {drop ? (
            <>
              <DragDrop />
              <button onClick={() => setDrop(false)} className="btn-secondary">
                <i className="fa-solid fa-caret-left"></i>
                <span>Back</span>
              </button>
            </>
          ) : (
            <>
              <button className="btn-primary" onClick={() => setDrop(true)}>
                <i className="fa-solid fa-arrows-spin"></i>
                <span>File Convert</span>
              </button>
              <button className="btn-secondary">
                <i className="fa-solid fa-hat-wizard"></i>
                <span>Wizard Editor</span>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
