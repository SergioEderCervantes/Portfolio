import React from 'react';
import projectsData from '../data/projects2.json';
import ProjectCard from './ProjectCard';

const FeaturedProjects = () => {
  const row1Projects = projectsData.slice(0, 3);
  const row2Projects = projectsData.slice(3, 5);

  return (
    <section id="featured-projects" className="py-20 px-4 w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center text-white mb-12 glowing-border" data-aos="fade-down">Proyectos Destacados</h2>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            {row1Projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} delay={index * 50} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center md:w-2/3 mx-auto">
            {row2Projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} delay={(index + 3) * 50} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;