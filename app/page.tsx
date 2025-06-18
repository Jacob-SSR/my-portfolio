import Hero from "@/app/components/Hero";
import Aboutpage from "./about/page";
import TechStack from "@/app/components/TechStack";
import Timeline from "@/app/components/Timeline";
import Projectpage from "./projects/page";
import Contactpage from "./contact/page";

const Home = () => {
  return (
    <main className="space-y-24">
      <Hero />
      <Aboutpage />
      <TechStack />
      <Timeline />
      <Projectpage />
      <Contactpage />
    </main>
  );
};
export default Home;
