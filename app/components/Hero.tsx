"use client";

import { Button } from "./ui/button";
import { Download } from "lucide-react";
import SplitText from "./ui/SplitText";
import Image from "next/image";
import { motion } from "framer-motion";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const Hero = () => {
  return (
    <div className="m-6 sm:m-10">
      <section className="flex flex-col lg:flex-row items-center justify-center flex-wrap gap-10 p-6">
        {/* Text Section */}
        <div className="flex flex-col items-start w-full lg:w-2/3 max-w-4xl overflow-visible">
          <SplitText
            text="Hi, I'm Teepakorn Sangiamsak"
            className="text-4xl md:text-5xl font-bold mb-4"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          <SplitText
            text="Junior Full Stack Developer"
            className="text-4xl md:text-5xl font-bold mb-4"
            delay={150}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          <SplitText
            text="Welcome to my portfolio"
            className="text-4xl md:text-5xl font-bold"
            delay={200}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>

        {/* Profile Image */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} // เริ่มจางและเล็ก
            animate={{ opacity: 1, scale: 1 }} // ค่อยๆ ชัดขึ้นและขยายเต็ม
            transition={{ duration: 2.5, ease: "easeInOut" }} // เวลาและความนุ่ม
          >
            <Image
              src="/assets/CC19 (20).jpg"
              width={256}
              height={256}
              alt="Profile Image"
              className="border rounded-full hover:scale-105 transition "
            />
          </motion.div>
        </div>
      </section>

      {/* Resume Button */}
      <div className="flex justify-center mt-6">
        <Button className="p-8 text-lg rounded-4xl">
          <a
            href="/assets/Teepakorn Sangiamsak Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Download />
            Resume
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
