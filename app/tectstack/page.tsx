"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiMongodb,
  SiClerk,
  SiJsonwebtokens,
  SiStripe,
  SiGit,
  SiGithub,
  SiVite,
  SiPostman,
  SiVercel,
} from "react-icons/si";

const techIcons = [
  { Icon: SiReact, color: "#61dafb" },
  { Icon: SiNextdotjs, color: "#ffffff" },
  { Icon: SiTailwindcss, color: "#38b2ac" },
  { Icon: SiJavascript, color: "#f7df1e" },
  { Icon: SiTypescript, color: "#3178c6" },
  { Icon: SiNodedotjs, color: "#8cc84b" },
  { Icon: SiExpress, color: "#ffffff" },
  { Icon: SiPrisma, color: "#0c344b" },
  { Icon: SiMysql, color: "#4479a1" },
  { Icon: SiFirebase, color: "#ffca28" },
  { Icon: SiSupabase, color: "#3ecf8e" },
  { Icon: SiMongodb, color: "#4db33d" },
  { Icon: SiClerk, color: "#6f48eb" },
  { Icon: SiJsonwebtokens, color: "#ffffff" },
  { Icon: SiStripe, color: "#008CDD" },
  { Icon: SiGit, color: "#f05032" },
  { Icon: SiGithub, color: "#ffffff" },
  { Icon: SiVite, color: "#646cff" },
  { Icon: SiPostman, color: "#ff6c37" },
  { Icon: SiVercel, color: "#ffffff" },
];

const TechStackPage = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-10 ">
      {techIcons.map(({ Icon, color }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, type: "spring", stiffness: 150 }}
          whileHover={{
            scale: 1.2,
            opacity: 1,
            color: color,
            boxShadow: `0 0 12px ${color}`,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "12px",
            transition: { duration: 0.15 },
          }}
          className="cursor-pointer p-2 rounded-md"
          style={{
            color: color,
            opacity: 0.4,
            transition: "all 0.15s ease-in-out",
          }}
        >
          <Icon size={48} />
        </motion.div>
      ))}
    </div>
  );
};

export default TechStackPage;
