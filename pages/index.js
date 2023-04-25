import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar2 from "@/components/NavBar";
import GlassContainer from "../components/glasscontainer";
const inter = Inter({ subsets: ["latin"] });
import ParticleBackground from "../components/particleBackground";

export default function Home() {
  return (
    <main>
      <ParticleBackground />

      <Navbar2 />
      <GlassContainer />
    </main>
  );
}
