import React from 'react';

const ProjectCard = ({ p }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden mb-8 max-w-5xl mx-auto hover:shadow-xl transition-shadow duration-300">
      {/* Left side - Image */}
      <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-6">
        <img 
          src="/vite.svg" 
          alt={p.name} 
          className="w-full h-48 object-contain"
        />
      </div>

      {/* Right side - Content */}
      <div className="md:w-2/3 p-6 space-y-4">
        {/* Project Name */}
        <h3 className="text-2xl font-bold text-gray-800">
          {p.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {p.desc}
        </p>

        {/* Features */}
        <div>
          <h4 className="text-lg font-semibold text-gray-700 mb-2">Key Features</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {p.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="text-lg font-semibold text-gray-700 mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {p.tech.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        <div>
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            View on GitHub 
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;