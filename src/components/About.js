import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section className="section" id="about" initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
      <h2>About Me</h2>
      <p>A self-motivated and quick learner with strong analytical skills. Passionate about building modern, responsive web applications.</p>
    </motion.section>
  );
}
export default About;