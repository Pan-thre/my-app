import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section className="section" id="contact" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/your-form-id" method="POST">
        <input type="text" name="name" placeholder="Your Name" required /><br /><br />
        <input type="email" name="email" placeholder="Your Email" required /><br /><br />
        <textarea name="message" placeholder="Your Message" required></textarea><br /><br />
        <button type="submit">Send</button>
      </form>
    </motion.section>
  );
}
export default Contact;