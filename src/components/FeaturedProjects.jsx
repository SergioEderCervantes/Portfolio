import React from 'react';
import projectsData from '../data/projects2.json';
import ProjectCard from './ProjectCard';

const FeaturedProjects = () => {
  return (
    <section id="featured-projects" className="py-20 px-4 w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center text-white mb-12 glowing-border" data-aos="fade-down">Proyectos Destacados</h2>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} delay={index * 50} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;