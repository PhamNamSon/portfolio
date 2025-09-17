import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center"
    >
     <div className="container max-w-4xl mx-auto text-center z-10 px-2">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hello, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">Nam Son </span>
            <span className="ml-2 opacity-0 animate-fade-in-delay-2">Pham</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I design and build scalable systems with modern cloud and DevOps practices. With skills across frontend, backend, and cloud, I adapt to deliver end-to-end solutions.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#experience" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm mb-2 cursor-default">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
