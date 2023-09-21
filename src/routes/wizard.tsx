import Navbar from "../components/navbar";
import Cards from "../components/cards";

export default function Wizard() {
  return (
    <>
      <Navbar />
      <div className="container-flexbox place-content-center gap-7 m-7">
        <Cards />
      </div>
    </>
  );
}
