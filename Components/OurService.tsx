import React from 'react';
import { FaFilePdf, FaVideo, FaCode, FaMobile, FaDatabase, FaGlobe, FaShieldAlt, FaBolt } from 'react-icons/fa';

const OurService: React.FC = () => {
  const services = [
    {
      title: 'PDF AI Summary',
      icon: <FaFilePdf size={30} />,
      description: 'Intelligent document analysis and summarization'
    },
    {
      title: 'AI Video Summary', 
      icon: <FaVideo size={30} />,
      description: 'Automated video content extraction and insights'
    },
    {
      title: 'Web Development',
      icon: <FaGlobe size={30} />,
      description: 'Modern, responsive web applications'
    },
    {
      title: 'Mobile Apps',
      icon: <FaMobile size={30} />,
      description: 'Native and cross-platform solutions'
    },
    {
      title: 'Database Solutions',
      icon: <FaDatabase size={30} />,
      description: 'Scalable data architecture and management'
    },
    {
      title: 'Custom Software',
      icon: <FaCode size={30} />,
      description: 'Tailored applications for your needs'
    },
    {
      title: 'Security Services',
      icon: <FaShieldAlt size={30} />,
      description: 'Comprehensive cybersecurity solutions'
    },
    {
      title: 'Performance Optimization',
      icon: <FaBolt size={30} />,
      description: 'Speed and efficiency improvements'
    }
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl bg-black mx-auto max-w-2xl mb-8 md:leading-none font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
            Explore Our Service
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Innovative, Interactive, And Intuitive Development
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl p-6 md:p-8 transition-all duration-500 hover:scale-105 cursor-pointer border border-gray-800 hover:border-purple-500/50"
              style={{ backgroundColor: '#0e0320' }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 text-center space-y-4">
                {/* Icon */}
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                {service.description && (
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                )}
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-tr-2xl rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </section>
  );
};

export default OurService;