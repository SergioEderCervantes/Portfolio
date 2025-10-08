import React from 'react';
import projectsData from '../data/projects.json';
import ProjectCard from './ProjectCard';

const FeaturedProjects = () => {
  const featured = projectsData.slice(0, 4);

  return (
    <section id="featured-projects" className="py-20 px-4 w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center text-white mb-12" data-aos="fade-down">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-32 ">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index * 50} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
