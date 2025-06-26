import CardSwap, { Card } from "./CardSwap/CardSwap";
import { Github } from "lucide-react";

const ProjectCard = () => {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={true}
      >
        {/* Card 1 */}
        <Card className="bg-black/80 rounded-xl border border-white/10 shadow-xl p-4 text-white max-w-md">
          <div className="flex items-center gap-1 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <h3 className="text-xl font-bold mb-1">SHOESHOE</h3>
          <div className="border-b border-gray-600 mb-2"></div>
          <p className="text-sm mb-2">
            An e-commerce website for smart shoe shopping with modern UI and
            AI-powered personalized product recommendations.
          </p>
          <ul className="list-disc list-outside pl-6 text-sm text-muted-foreground leading-relaxed">
            <li>
              Revolutionized online shoe shopping with an intuitive,
              user-friendly design.
            </li>
            <li>
              Integrated AI-powered features for personalized shopping
              experiences.
            </li>
            <li>
              Provided robust business management tools for efficient store
              management.
            </li>
          </ul>
          <div className="mt-3">
            <a
              href="https://github.com/Jacob-SSR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 mt-3 text-sm font-medium text-white border border-white/20 rounded-lg hover:bg-white/10 transition"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </Card>

        {/* Card 2 */}
        <Card className="bg-black/80 rounded-xl border border-white/10 shadow-xl p-4 text-white max-w-md">
          <div className="flex items-center gap-1 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <h3 className="text-xl font-bold mb-1">GREENCART</h3>
          <div className="border-b border-gray-600 mb-2"></div>
          <p className="text-sm mb-2">
            An e-commerce website for fresh vegetable shopping with modern UI
            and convenient home delivery service.
          </p>
          <ul className="list-disc list-outside pl-6 text-sm text-muted-foreground leading-relaxed">
            <li>
              Developed a full-featured e-commerce platform with product
              browsing, cart functionality, checkout, and order management.
            </li>
            <li>
              Implemented secure authentication and authorization using JWT.
            </li>
            <li>Integrated Stripe for secure and seamless online payments.</li>
          </ul>
          <div className="mt-3">
            <a
              href="https://greencart-wine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 mt-3 text-sm font-medium text-white border border-white/20 rounded-lg hover:bg-white/10 transition"
            >
              Visit
            </a>
          </div>
        </Card>

        {/* Card 3 */}
        <Card className="bg-black/80 rounded-xl border border-white/10 shadow-xl p-4 text-white max-w-md">
          <div className="flex items-center gap-1 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <h3 className="text-xl font-bold mb-1">JUMPKING 2D</h3>
          <div className="border-b border-gray-600 mb-2"></div>
          <p className="text-sm mb-2">University Project Game Develop</p>
          <ul className="list-disc list-outside pl-6 text-sm text-muted-foreground leading-relaxed">
            <li>Game Development Using the Unity Program.</li>
          </ul>
          <div className="mt-3">
            <a
              href="https://greencart-wine.vercel.app/"
              target="_blank"
              className="text-blue-400 hover:underline text-sm"
            >
              Visit
            </a>
          </div>
        </Card>
      </CardSwap>
    </div>
  );
};

export default ProjectCard;
