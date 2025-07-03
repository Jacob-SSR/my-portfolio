"use client";

import { Button } from "./ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const Hero = () => {
  const [textColor, setTextColor] = useState("#FFF4A4");

  return (
    <div className="m-6 sm:m-10">
      <section
        id="home"
        className="flex flex-col lg:flex-row items-center justify-center flex-wrap gap-10 p-6"
      >
        {/* Text Section */}
        <div className="flex flex-col items-start w-full lg:w-2/3 max-w-4xl ">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-4xl"
          >
            Hi, I'm Teepakorn Sangiamsak
          </motion.span>

          <div
            style={{ color: textColor }}
            className="text-2xl sm:text-2xl md:text-3xl"
          >
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                () => setTextColor("#FFF4A4"),
                "Full Stack Developer",
                1000,
              ]}
              repeat={Infinity}
              speed={10}
            />
          </div>

          <TypeAnimation
            sequence={["Welcome to", 1000, "Welcome to My Portfolio", 1000]}
            className="text-2xl sm:text-3xl md:text-4xl mt-2"
            repeat={0}
            speed={10}
          />
        </div>

        {/* Profile Image */}
        <div className="flex justify-center items-center ">
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
