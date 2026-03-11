import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      className={`group relative overflow-hidden border border-muted bg-bgsecondary transition
        hover:border-accent hover:shadow-[0_0_25px_rgba(56,239,125,0.15)]
        ${project.featured ? 'md:col-span-2' : 'col-span-1'}`}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* IMAGE */}
      <div className="relative h-60 overflow-hidden border-b border-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 
                     group-hover:scale-105 transition duration-500"
        />

        {/* TOP RIGHT LINKS */}
        <div className="absolute top-4 right-4 flex gap-3 opacity-0 
                        group-hover:opacity-100 transition duration-300">

          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-muted bg-bgprimary/70 backdrop-blur-md
                         text-textdim rounded-sm
                         hover:border-accent hover:text-accent
                         hover:shadow-[0_0_18px_rgba(56,239,125,0.6)]
                         transition-all duration-300"
              whileHover={{ y: -4, scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} />
            </motion.a>
          )}

          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-muted bg-bgprimary/70 backdrop-blur-md
                         text-textdim rounded-sm
                         hover:border-accent hover:text-accent
                         hover:shadow-[0_0_18px_rgba(56,239,125,0.6)]
                         transition-all duration-300"
              whileHover={{ y: -4, scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} />
            </motion.a>
          )}

        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">

        {project.featured && (
          <div className="mb-4 text-xs tracking-widest neon-text">
            FEATURED PROJECT
          </div>
        )}

        <h3 className="text-2xl font-bold mb-3 tracking-tight">
          {project.title}
        </h3>

        <p className="text-textdim mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <motion.span
              key={index}
              className="px-3 py-1 text-xs border border-muted text-textdim
                         hover:border-accent hover:text-accent transition"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {tech.toUpperCase()}
            </motion.span>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;