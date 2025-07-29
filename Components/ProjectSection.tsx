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
  link: string; // Optional: Link to the project details page
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
  },
  {
    id: "2",
    title: "E-commerce Redesign",
    description: "Modernizing an online retail experience with new UI/UX.",
    link: "/projects/ecommerce-redesign",
  },
  {
    id: "3",
    title: "Mobile Game Development",
    description: "Creating an engaging mobile game for iOS and Android.",
    link: "/projects/mobile-game",
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
        <span
          
          className=" flex  mb-3 justify-end  "
          
        >
            <a href="/projects" aria-label="See more projects"  className="text-lg text-gray-400 hover:text-white transition-colors duration-300">
                See more
            </a>
        </span>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProjects.map((project) => (
            <div
              key={project.id} // Unique key for each mapped element is crucial for React performance
              className="bg-[#0E0320] bg-opacity-50 rounded-xl shadow-lg p-8 h-64 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-purple-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-base">{project.description}</p>
              </div>
              <a
                href={project.link}
                className="self-end text-purple-400 hover:text-purple-200 transition-colors duration-300 mt-4"
                aria-label={`Learn more about ${project.title}`}
              >
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
