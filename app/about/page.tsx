import ScrollFloat from "@/app/components/ui/ScrollFloat";
import Lanyard from "../components/Lanyard/Lanyard";

const Aboutpage = () => {
  return (
    <>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center "
      >
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          ABOUT ME
        </ScrollFloat>
      </section>
      <div >
        <Lanyard position={[-15, 0, 20]} gravity={[0, -40, 0]} />
      </div>
    </>
  );
};
export default Aboutpage;
