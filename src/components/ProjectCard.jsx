import React from 'react';

const ProjectCard = ({ project, delay }) => {
  return (
    <div 
      className="group bg-midnight/50 rounded-lg border border-blue-900/50 hover:border-strong-purple/50 transition-colors duration-300 h-full overflow-hidden"
      data-aos="zoom-in-up"
      data-aos-delay={delay}
    >
      <div className="overflow-hidden rounded-t-lg">
        <img 
          src={project.imagen || "https://placehold.co/600x400/1a1a2e/ffffff?text=Project"} 
          alt={project.nombre} 
          className="aspect-video object-cover w-full"
        />
      </div>
      <div className="p-6 transition-transform duration-300 group-hover:-translate-y-2">
        <h3 className="text-2xl font-bold mb-2 text-white">{project.nombre}</h3>
        <p className="text-neutral-400 mb-4">{project.descripcionCorta}</p>
        <div className="flex flex-wrap gap-2">
          {project.rolesDesempeñados.map((role, index) => (
            <span key={index} className="bg-strong-purple/20 text-purple-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {role}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
