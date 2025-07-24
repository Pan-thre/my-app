import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-commerce Website',
    description: 'MERN stack project with product catalog, user auth, and payment gateway.'
  },
  {
    title: 'Library Management System',
    description: 'Full-stack app to manage books, issue/return, and member data.'
  },
];

function Projects() {
  return (
    <motion.section className="section" id="projects" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div className="card" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </motion.section>
  );
}
export default Projects;