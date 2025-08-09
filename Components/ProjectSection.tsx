// components/OurProjects.tsx
import React from "react";

/**
 * Interface for a single project.
 * Defines the structure of a project object.
 */
interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  backgroundImage: string; // Added background image property
}

/**
 * Sample project data.
 * In a real application, this data would likely come from an API call or a CMS.
 */
const sampleProjects: Project[] = [
  {
    id: "1",
    title: "Innovative AI Platform",
    description: "A cutting-edge AI solution for data analysis and prediction.",
    link: "/projects/ai-platform",
    backgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop&auto=format",
  },
  {
    id: "2",
    title: "E-commerce Redesign",
    description: "Modernizing an online retail experience with new UI/UX.",
    link: "/projects/ecommerce-redesign",
    backgroundImage: "", // Empty URL to demonstrate skeleton
  },
  {
    id: "3",
    title: "Mobile Game Development",
    description: "Creating an engaging mobile game for iOS and Android.",
    link: "/projects/mobile-game",
    backgroundImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop&auto=format",
  },
];

const ProjectSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header Section: Title and See More link */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <h1 className="text-6xl mx-auto max-w-2xl mb-3 md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
            Our project
          </h1>
        </div>
        <span className="flex mb-3 justify-end">
          {/* <a href="/projects" aria-label="See more projects"  className="text-lg text-gray-400 hover:text-white transition-colors duration-300">
              See more
          </a> */}
        </span>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProjects.map((project) => (
            <div
              key={project.id}
              className="relative rounded-xl shadow-lg h-64 overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl group cursor-pointer"
            >
              {/* Background Image or Skeleton */}
              {project.backgroundImage && project.backgroundImage.trim() !== "" ? (
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${project.backgroundImage})`,
                  }}
                />
              ) : (
                /* Skeleton background */
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 animate-pulse">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/20 to-transparent animate-shimmer" />
                </div>
              )}
              
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0  bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-60" />
              
              {/* Content overlay - default state */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-white drop-shadow-lg">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-base drop-shadow-md">{project.description}</p>
                </div>
              </div>

              {/* Hover overlay - "Visit" state */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.link}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-full text-xl transition-colors duration-300 shadow-lg"
                  aria-label={`Visit ${project.title}`}
                >
                  Visit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;