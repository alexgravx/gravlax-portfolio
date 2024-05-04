import Image from "next/image";
import Home from "../pages/home"
import TechList from "../components/tech-list";

export default function Main() {

  return (
    <div>
      <Home />
      <TechList />
    </div>
  );
}
