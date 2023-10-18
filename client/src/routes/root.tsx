import { useState, useEffect } from "react";
import axios from "axios";

export default function root() {
  const [data, setData] = useState([]);
  const apiURL = import.meta.env.DEV
    ? import.meta.env.VITE_REACT_APP_API_URL
    : import.meta.env.VITE_REACT_APP_API_URL_PROD;

  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        setData(response.data.files);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <section className="h-screen flex justify-center items-center overscroll-none">
        <img src="/logo.png" alt="logo" className="eye" />
        <div className="relative container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <div className="bg-dark p-2">
            <h1 className="leading-none">
              <span className="text-3xl sm:text-4xl special-header">
                WELCOME TO THE
              </span>
              <br />
              <span className="text-4xl sm:text-5xl underline text-accent">
                ANIME ARCHIVE
              </span>
            </h1>
            <p className="mt-8 mb-2 text-md md:text-lg">
              A place where you can store your progress offline
            </p>

            <div className="hidden button-group justify-center">
              <a className="btn btn-primary">
                <i className="fa-solid fa-right-to-bracket"></i>
                <span>Sign In</span>
              </a>
              <a className="btn btn-dark" href="/wizard">
                <i className="fa-solid fa-hat-wizard"></i> <span>Wizard</span>
              </a>
            </div>
            <div className="button-group justify-center">
              <a href="wizard" className="btn btn-primary">
                <i className="fa-solid fa-hat-wizard"></i>
                <span>MAL Wizard</span>
              </a>
              <a href="#" className="btn btn-dark">
                <i className="fa-solid fa-right-from-bracket"></i>
                <span>Sign Out</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div>
        <h1>Data from the backend:</h1>
        <ul>
          {data.map((file, index) => (
            <li key={index}>{file}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
