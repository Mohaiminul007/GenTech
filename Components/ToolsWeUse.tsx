import React from "react";

interface ToolsWeUse {
  id: string;
  Name: string;
  src?: string;
  category: string;
  description?: string;
}

const ToolsLogo: ToolsWeUse[] = [
  {
    id: "1",
    Name: "Next.js",
    src: "/icons/next.png",
    category: "Framework",
    description: "React framework for production"
  },
  {
    id: "2",
    Name: "React",
    src: "/icons/React.png",
    category: "Library",
    description: "JavaScript library for building UIs"
  },
  {
    id: "3",
    Name: "TypeScript",
    src: "/icons/Typescript.png",
    category: "Language",
    description: "Typed superset of JavaScript"
  },
  {
    id: "4",
    Name: "ESLint",
    src: "/icons/ESLint.png",
    category: "Tool",
    description: "JavaScript linting utility"
  },
  {
    id: "5",
    Name: "Node.js",
    src: "/icons/node.png",
    category: "Runtime",
    description: "JavaScript runtime environment"
  },
  {
    id: "6",
    Name: "Tailwind CSS",
    src: "/icons/Tailwind.png",
    category: "Framework",
    description: "Utility-first CSS framework"
  },
  {
    id: "7",
    Name: "Git",
    src: "/icons/git.png",
    category: "Tool",
    description: "Version control system"
  },
  {
    id: "8",
    Name: "GitHub",
    src: "/icons/GitHub.png",
    category: "Platform",
    description: "Code hosting platform"
  },
  {
    id: "9",
    Name: "Framer Motion",
    src: "/icons/framer-motion.png",
    category: "Library",
    description: "Motion library for React"
  },
  {
    id: "10",
    Name: "Namecheap",
    src: "/icons/namecheap.png",
    category: "Service",
    description: "Domain registration service"
  },
];

const ToolsWeUse = () => {
  return (
    <section className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-white to-purple-400 bg-clip-text text-transparent">
              Tools We Use
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cutting-edge technologies and tools that power our development process
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {ToolsLogo.map((tool, index) => (
            <div
              key={tool.id}
              className="group relative flex flex-col items-center space-y-3 p-4 transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              {/* Tool Logo Container */}
              <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center p-3 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:bg-white/20">
                {tool.src && (
                  <img
                    src={tool.src}
                    alt={tool.Name}
                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                  />
                )}
              </div>
              
              {/* Tool Name */}
              <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors duration-300 text-center">
                {tool.Name}
              </h3>
              
              {/* Category Badge - appears on hover */}
              <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -bottom-2">
                {tool.category}
              </span>

              {/* Tooltip on hover */}
              {tool.description && (
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-20 border border-gray-700">
                  {tool.description}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        

        
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
    </section>
  );
};

export default ToolsWeUse;