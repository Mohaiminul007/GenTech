import React from 'react';
import { FaBrain, FaBolt, FaShieldAlt, FaUsers, FaTrophy, FaRocket } from 'react-icons/fa';

const WhyChoseGenTech: React.FC = () => {
  const reasons = [
    {
      icon: <FaBrain size={40} />,
      title: 'AI-Powered Excellence',
      description: 'Cutting-edge artificial intelligence integrated into every solution we deliver'
    },
    {
      icon: <FaBolt size={40} />,
      title: 'Lightning Fast Delivery',
      description: 'Rapid development cycles without compromising on quality or performance'
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols protecting your data and applications'
    },
    {
      icon: <FaUsers size={40} />,
      title: 'Expert Team',
      description: '10+ years of combined experience in modern technology stacks'
    },
    {
      icon: <FaTrophy size={40} />,
      title: 'Proven Track Record',
      description: '500+ successful projects delivered across various industries'
    },
    {
      icon: <FaRocket size={40} />,
      title: 'Future-Ready Solutions',
      description: 'Built for tomorrow with scalable architecture and emerging technologies'
    }
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Why Choose </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Gen
            </span>
            <span className="text-white">Tech</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Innovative, Interactive, And Intuitive Development
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-8 transition-all duration-500 hover:scale-105 cursor-pointer border border-gray-800 hover:border-purple-500/50"
              style={{ backgroundColor: '#0e0320' }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 text-center space-y-4">
                {/* Icon */}
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                  {reason.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {reason.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-tr-2xl rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
    </section>
  );
};

export default WhyChoseGenTech;