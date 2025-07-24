import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section className="section" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <h1>Hi, I'm Sagnik 👋</h1>
      <p>Web Development Aspirant | React Enthusiast</p>
    </motion.section>
  );
}
export default Hero;