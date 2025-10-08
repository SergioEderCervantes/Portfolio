import React from 'react';
import people from '../data/people.json';
import './AboutUs.css';

const AboutUs = () => {
  const showPeopleCards = false; // Feature flag for team cards

  return (
    <section id='abt-us' className="py-20 hero-pattern">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12 glowing-border" data-aos="fade-up">Nuestro Equipo</h2>
        <div 
          className="max-w-4xl mx-auto text-justify text-neutral-300 mb-12 text-lg bg-midnight/50 p-6 rounded-lg border border-blue-900/50 hover:border-strong-purple/50 transition-colors" 
          data-aos="fade-up"
        >
          <p className="mb-4">
            En nuestro equipo desarrollamos soluciones digitales que combinan funcionalidad, diseño y tecnología moderna.
            Nos especializamos en crear aplicaciones web completas: flexibles, escalables y hechas a la medida de cada proyecto, sin importar si comienza como una simple idea o un sistema complejo.
          </p>
          <p>
            Cada proyecto refleja nuestra pasión por la innovación, la automatización y la construcción de software que realmente funciona y conecta con la gente.
          </p>
        </div>
        
        {showPeopleCards && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {people.map((person, index) => (
              <div 
                key={person.id} 
                className="bg-midnight/50 p-6 rounded-lg border border-blue-900/50 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img 
                  src={person.imagen} 
                  alt={person.nombre} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-strong-purple"
                />
                <h3 className="text-2xl font-bold text-white mb-2">{person.nombre}</h3>
                <p className="text-neutral-400">{person.descripcion}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutUs;
