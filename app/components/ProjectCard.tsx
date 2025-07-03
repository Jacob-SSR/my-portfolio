import CardSwap, { Card } from "./CardSwap/CardSwap";
import { projects } from "../utils/Data";

const ProjectCard = () => {
  return (
    <div className="relative lg:h-[550px] md:h-[350px] h-[200px] flex items-center justify-center">
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={true}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-black rounded-xl border border-white/10 shadow-xl p-4 text-white max-w-full"
          >
            <div className="flex items-center gap-1 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold mb-1">{project.title}</h3>
            <div className="border-b border-gray-600 mb-2"></div>
            <p className="text-sm mb-2">{project.description}</p>
            <ul className="list-disc list-outside pl-6 text-sm text-muted-foreground leading-relaxed">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="mt-3">
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 mt-3 text-sm font-medium text-white border border-white/20 rounded-lg hover:bg-white/10 transition ${
                  project.link.icon ? "" : "inline-block"
                }`}
              >
                {project.link.icon}
                {project.link.label}
              </a>
            </div>
          </Card>
        ))}
      </CardSwap>
    </div>
  );
};

export default ProjectCard;
