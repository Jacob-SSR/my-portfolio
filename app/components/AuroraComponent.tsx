import Aurora from "./ui/Aurora";

const AuroraComponent = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-5] pointer-events-none blur-3xl">
      <Aurora
        colorStops={["#5227FF", "#7CFF67", "#5227FF"]}
        blend={0.5}
        amplitude={2.0}
        speed={1}
      />
    </div>
  );
};

export default AuroraComponent;
