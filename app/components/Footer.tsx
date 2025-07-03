import {
  Contact,
  Contact2,
  GithubIcon,
  Linkedin,
  LucideContact2,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Teepakorn Sangiamsak. All rights
          reserved.
        </p>

        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/Jacob-SSR"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <GithubIcon /> Github
          </a>
          <a
            href="https://www.linkedin.com/in/teepakorn-sangiamsak-b83781362/"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center gap-2 hover:text-white transition-colors"
          >
            <Linkedin /> Linkedin
          </a>
          <a
            href="mailto:teepakorn.snis@gmail.com"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <LucideContact2 /> Email: teepakorn.snis@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
