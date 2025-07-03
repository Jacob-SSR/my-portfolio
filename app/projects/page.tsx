import ProjectCard from "../components/ProjectCard";

const Projectpage = () => {
  return (
    <>
      <div
        id="projects"
        className=" text-4xl text-center font-bold justify-center items-center "
      >
        Projects
      </div>
      <div className="max-w-4xl m-auto">
        <ProjectCard />
      </div>
    </>
  );
};
export default Projectpage;
