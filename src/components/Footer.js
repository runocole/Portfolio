import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-8 border-t border-baby-pink/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <a href="#home" className="text-3xl font-cursive text-baby-pink">Naomi Cole</a>
            <p className="text-gray-400 mt-2 text-sm">Full Stack Developer</p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-8 mb-6 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <a href="#home" className="text-white hover:text-baby-pink transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-baby-pink transition-colors">About</a>
            <a href="#skills" className="text-white hover:text-baby-pink transition-colors">Skills</a>
            <a href="#projects" className="text-white hover:text-baby-pink transition-colors">Projects</a>
            <a href="#contact" className="text-white hover:text-baby-pink transition-colors">Contact</a>
          </motion.div>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-baby-pink transition-colors"
              whileHover={{ y: -5 }}
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-baby-pink transition-colors"
              whileHover={{ y: -5 }}
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-baby-pink transition-colors"
              whileHover={{ y: -5 }}
            >
              <FaTwitter size={20} />
            </motion.a>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            © {currentYear} Naomi Cole. All rights reserved. Made with 
            <FaHeart className="text-baby-pink mx-1 animate-pulse" /> 
            in Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 