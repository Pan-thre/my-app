import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <motion.section className="section" id="skills" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
      <h2>Skills</h2>
      <ul>
        <li>HTML / CSS / JavaScript</li>
        <li>React.js / Node.js / Express.js</li>
        <li>MongoDB / Firebase</li>
        <li>Git / GitHub</li>
      </ul>
    </motion.section>
  );
}
export default Skills;