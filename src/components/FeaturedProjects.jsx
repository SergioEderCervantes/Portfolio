import React from 'react';
import projectsData from '../data/projects.json';
import ProjectCard from './ProjectCard';

const FeaturedProjects = () => {
  // Only show the first 3 projects as requested
  const featured = projectsData.slice(0, 3);

  return (
    <section id="featured-projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12" data-aos="fade-down">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
