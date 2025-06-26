import ProjectCard from "../components/ProjectCard";

const Projectpage = () => {
  return (
    <div className="min-h-screen px-4 py-16 text-white">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="max-w-5xl mx-auto">
        <ProjectCard />
      </div>
    </div>
  );
};
export default Projectpage;
