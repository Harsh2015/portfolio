import HeroCanvas from "./HeroCanvas";

const Hero = () => {
  return (
    <section
      id="home"
className="relative overflow-hidden pt-6 sm:pt-4 md:pt-6"

    >
       {/* Background Canvas */}
      <div className="absolute inset-x-0 top-0 h-[90px] z-0 pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        >
          <HeroCanvas />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">

{/* Profile Image */}
<img
  src="/profile.png"
  alt="Harsh Katariya"
  className="
    w-40 h-40
    sm:w-40 sm:h-40
    md:w-44 md:h-44
    rounded-full
    object-cover
    ring-1
    ring-black
    
    shadow-lg
  "
/>



          {/* Text — NO GAP */}
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mt-4">
            Hi, I’m <span className="text-blue-600">Harsh Katariya</span>
          </h1>

          <p className="text-gray-600 text-xl md:text-xl leading-snug">
            Aspiring Data Scientist
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;
