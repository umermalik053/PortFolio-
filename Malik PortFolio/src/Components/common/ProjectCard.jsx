import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <motion.div
      className="relative group w-full md:w-72 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image Section */}
      <div className="overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-48 object-fit transition-transform duration-300 group-hover:scale-110"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>

      {/* Hover Effect */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-md hover:bg-gray-200"
        >
          View Project
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
