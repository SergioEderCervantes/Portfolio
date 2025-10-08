import React from 'react';

const ProjectCard = ({ project, delay }) => {
  return (
    <div 
      className="bg-midnight/50 p-6 rounded-lg border border-blue-900/50 hover:border-strong-purple/50 transition-colors duration-300 h-full"
      data-aos="zoom-in-up"
      data-aos-delay={delay}
    >      <h3 className="text-2xl font-bold mb-2 text-white">{project.nombre}</h3>
      <p className="text-neutral-400 mb-4">{project.descripcionCorta}</p>
      <div className="flex flex-wrap gap-2">
        {project.rolesDesempeñados.map((role, index) => (
          <span key={index} className="bg-strong-purple/20 text-purple-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {role}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
