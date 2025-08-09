import React from 'react';

const OurVision: React.FC = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center py-20 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold">
          <span className="text-white">Our </span>
          <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
            Vision
          </span>
        </h1>

        {/* Vision Statement */}
        <div className="space-y-8">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            To be a global leader in AI innovation, empowering businesses to achieve unprecedented 
            growth and efficiency.
          </p>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            We envision a future where artificial intelligence is seamlessly integrated into 
            every aspect of business, driving intelligent decisions, fostering creativity, and 
            unlocking new possibilities for human potential.
          </p>
        </div>

       
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-500"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)"/>
          </svg>
        </div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

        {/* Subtle lines */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
        <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default OurVision;