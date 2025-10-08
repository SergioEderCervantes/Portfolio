import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projects2.json';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <h2 className="text-4xl font-bold mb-4">Proyecto no encontrado</h2>
        <Link to="/" className="text-strong-purple hover:underline">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20 text-white">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-strong-purple hover:underline mb-8 block">&larr; Volver a Proyectos</Link>
        <h1 className="text-5xl font-bold mb-4">{project.nombre}</h1>
        <img src={project.imagen} alt={project.nombre} className="w-full h-auto rounded-lg mb-8" />
        
        <div className="flex items-center gap-4 mb-8">
          {project.urlDeploy && (
            <a href={project.urlDeploy} target="_blank" rel="noopener noreferrer" className="bg-strong-purple text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
              Ver pagina
            </a>
          )}
          {project.urlGithub && (
            <a href={project.urlGithub} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors">
              Ver repositorio
            </a>
          )}
        </div>

        <div className="prose prose-invert max-w-none">
            <p className='text-2xl'>{project.destacado}</p>
            <br />
          <p>{project.descripcionDetallada}</p>
        </div>
        <div className="mt-8">
          <div className="flex flex-wrap gap-3">
            {project.tecnologias.map((tech, index) => (
              <span key={index} className="bg-strong-purple/20 text-purple-300 text-sm font-medium px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
