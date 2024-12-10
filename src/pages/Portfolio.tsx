import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Custom Steel Gate',
    description: 'Ornamental driveway gate with detailed metalwork',
    image: 'https://images.unsplash.com/photo-1555505019-8c3f1c4aba5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 2,
    title: 'Industrial Staircase',
    description: 'Modern industrial-style spiral staircase',
    image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 3,
    title: 'Metal Art Installation',
    description: 'Custom metal sculpture for corporate lobby',
    image: 'https://images.unsplash.com/photo-1569587112025-0d460e81a126?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 4,
    title: 'Steel Framework',
    description: 'Structural steel framework for commercial building',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  }
];

export function Portfolio() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Portfolio</h1>
      <p className="text-xl text-gray-600 mb-12">
        Browse through some of our recent projects and custom fabrication work.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}