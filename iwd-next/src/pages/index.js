import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "./components/Hero/hero";
import NavBar from "./components/Navbar/navbar";
import Location from "./components/Location/location";
import Sessions from "./components/Sessions/sessions";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden ">
      <NavBar />
      <Hero />
      <Location />
      <Sessions />
    </div>
  );
}
