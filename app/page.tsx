import Hero from "@/app/components/Hero";
import Aboutpage from "./about/page";
import TechStack from "@/app/components/TechStack";
import Timeline from "@/app/components/Timeline";
import Projectpage from "./projects/page";
import Contactpage from "./contact/page";
import TectStackpage from "./tectstack/page";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <main className="space-y-24 scroll-smooth">
      <Navbar />
      <div id="home" className="scroll-mt-24">
        <Hero />
      </div>
      <div id="about" className="scroll-mt-24">
        <Aboutpage />
      </div>
      <TechStack />
      <TectStackpage />
      <Timeline />
      <div id="projects" className="scroll-mt-24">
        <Projectpage />
      </div>
      <div id="contact" className="scroll-mt-24">
        <Contactpage />
      </div>
      <Footer />
    </main>
  );
};
export default Home;
