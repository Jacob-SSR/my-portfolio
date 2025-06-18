import Link from "next/link";

const Navbar = () => {
  return (
    <div className="justify-items-center">
      <div className="border rounded-3xl mt-4 p-4 ">
        <div className="flex justify-between gap-8 px-4">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
