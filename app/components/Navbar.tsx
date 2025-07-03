"use client";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="w-full fixed left-0 z-50 flex justify-center px-4 bottom-4 sm:top-4 sm:bottom-auto">
      <div className="w-full max-w-[500px] rounded-3xl p-4 bg-white/10 backdrop-blur-md border border-white/20">
        <div className="flex justify-between gap-4 sm:gap-8 text-white text-sm sm:text-lg">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={1500}
              offset={-80}
              spy={true}
              className="relative group px-4 py-2 rounded-2xl cursor-pointer select-none"
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-120 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
