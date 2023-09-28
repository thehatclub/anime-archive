import Navbar from "../components/navbar";
import Card from "../components/cards";
import Sidebar from "../components/sidebar";

export default function Wizard() {
  return (
    <>
      <Navbar />
      <div className="flex place-content-center md:justify-between gap-7 m-7">
        <div className="grid md:grid-cols-2 lg:flex lg:flex-wrap gap-7">
          <Card />
          <Card />
          <Card />
        </div>
        <Sidebar />
      </div>
    </>
  );
}
