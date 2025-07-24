import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer className="section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <p>Connect with me:</p>
      <a href="https://github.com/sagnikmallick">GitHub</a> |{' '}
      <a href="https://linkedin.com/in/sagnik-sagnik-mallick-40691a2a7">LinkedIn</a> |{' '}
      <a href="mailto:sagnikmallick9749@gmail.com">Email</a>
      <p style={{ marginTop: '1rem' }}>© {new Date().getFullYear()} Sagnik Mallick</p>
    </motion.footer>
  );
}
export default Footer;
