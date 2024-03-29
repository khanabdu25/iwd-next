import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "./components/Hero/hero";
import NavBar from "./components/Navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden ">
      <NavBar />
      <Hero />
    </div>
  );
}
