import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, delay }) => {
  return (
    <div 
      className="group bg-midnight/50 rounded-lg max-w-md border border-blue-900/50 hover:border-strong-purple/50 transition-colors duration-300 h-full overflow-hidden"
      data-aos="zoom-in-up"
      data-aos-delay={delay}
    >
      <div className="overflow-hidden rounded-t-lg relative">
        <img 
          src={project.imagen || "https://placehold.co/600x400/1a1a2e/ffffff?text=Project"} 
          alt={project.nombre} 
          className="aspect-video object-cover w-full group-hover:blur-xs transition-all"
        />
        <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
          <Link to={`/proyecto/${project.id}`} className="bg-strong-purple text-white font-bold py-2 px-4 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
            Ver más
          </Link>
        </div>
      </div>
      <div className="p-4 transition-transform duration-300 group-hover:-translate-y-2">
        <h3 className="text-xl font-bold mb-2 text-white">{project.nombre}</h3>
        <p className="text-neutral-400 mb-4">{project.descripcion}</p>
        <div className="flex flex-wrap gap-2">
          {project.tecnologias.map((tech, index) => (
            <span key={index} className="bg-strong-purple/20 text-purple-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="md:hidden mt-4">
          <Link to={`/proyecto/${project.id}`} className="text-strong-purple font-bold inline-block">
            Ver más →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
