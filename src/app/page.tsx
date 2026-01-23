import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About"; // Yeni ekledik
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-gray-300/30">
      <Navbar />
      <Hero />
      <About /> {/* Hero ile Projects arasına koyduk */}
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
