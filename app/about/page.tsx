"use client";

import ScrollFloat from "@/app/components/ui/ScrollFloat";
import Lanyard from "../components/Lanyard/Lanyard";
import ScrollReveal from "../components/ui/ScrollReveal";

const Aboutpage = () => {
  return (
    <>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center"
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

      <div className="p-5">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 ">
          <div className="flex justify-center lg:justify-start lg:w-250">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
          </div>

          <div className="flex flex-1 justify-center items-center text-center text-2xl  p-6 max-w-xl lg:mt-50 mx-auto lg:mx-0">
            <div className="flex flex-col space-y-6">
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={2}
                blurStrength={50}
              >
                Hello, I'm Teepakorn Sangiamsak.
              </ScrollReveal>
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={2}
                blurStrength={50}
              >
                I recently completed a Full Stack Web Development course at
                Software Park CodeCamp.
              </ScrollReveal>
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={2}
                blurStrength={50}
              >
                During my training and internships, I worked on projects and
                learned to collaborate with teams to solve technical challenges.
              </ScrollReveal>
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={2}
                blurStrength={50}
              >
                My goal is to continue growing as a developer and contribute to
                meaningful, user-focused applications.
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutpage;
