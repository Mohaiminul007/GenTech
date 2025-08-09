"use client";
import Button from "./ui/Button";
import StarsBg from "@/public/assets/stars.png";
import GridLines from "@/public/assets/grid-lines.png";

export const CallToAction = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 md:py-24 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="border border-white/15 py-24 rounded-xl overflow-hidden relative group">
          {/* Stars background with CSS animation */}
          <div 
            className="absolute inset-0 animate-stars"
            style={{
              backgroundImage: `url(${StarsBg.src})`,
              backgroundRepeat: 'repeat',
            }}
          />
          
          {/* Grid overlay - default state */}
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay group-hover:opacity-0 transition duration-700"
            style={{
              backgroundImage: `url(${GridLines.src})`,
              maskImage: 'radial-gradient(50% 50% at 50% 35%, black, transparent)',
              WebkitMaskImage: 'radial-gradient(50% 50% at 50% 35%, black, transparent)',
            }}
          />

          {/* Grid overlay - hover state */}
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              backgroundImage: `url(${GridLines.src})`,
              maskImage: 'radial-gradient(50% 50% at 50% 50%, black, transparent)',
              WebkitMaskImage: 'radial-gradient(50% 50% at 50% 50%, black, transparent)',
            }}
          />

          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-center text-white/70 max-w-xs mx-auto md:text-xl text-lg px-4 mt-5 tracking-tight">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center mt-8">
              <Button>Join Waitlist</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};