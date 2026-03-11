import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/content';

type ProjectFilter = 'all' | 'frontend' | 'backend' | 'fullstack';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else if (activeFilter === 'frontend') {
      setFilteredProjects(
        projects.filter((project) =>
          project.technologies.some((tech) =>
            ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'].includes(tech)
          )
        )
      );
    } else if (activeFilter === 'backend') {
      setFilteredProjects(
        projects.filter((project) =>
          project.technologies.some((tech) =>
            ['Node.js', 'Express', 'MongoDB'].includes(tech)
          )
        )
      );
    } else if (activeFilter === 'fullstack') {
      setFilteredProjects(
        projects.filter((project) =>
          project.technologies.some((tech) =>
            ['React', 'Node.js', 'Express'].includes(tech)
          )
        )
      );
    }
  }, [activeFilter]);

  const filters = [
    { id: 'all', label: 'ALL PROJECTS' },
    { id: 'frontend', label: 'FRONTEND' },
    { id: 'backend', label: 'BACKEND' },
    { id: 'fullstack', label: 'FULL STACK' },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">

        {/* SECTION HEADER */}
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            MY <span className="neon-text">PROJECTS</span>
          </h2>

          <p className="text-textdim max-w-2xl mx-auto">
            Selected works showcasing my engineering and design skills.
          </p>
        </AnimatedSection>

        {/* FILTER BUTTONS */}
        <AnimatedSection
          className="flex flex-wrap justify-center gap-4 mb-16"
          delay={0.2}
        >
          {filters.map((filter) => {
            const active = activeFilter === filter.id;
            return (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as ProjectFilter)}
                className={`px-6 py-3 border text-sm tracking-wider transition ${
                  active
                    ? 'border-accent text-accent'
                    : 'border-muted text-textdim hover:border-accent hover:text-accent'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                {filter.label}
              </motion.button>
            );
          })}
        </AnimatedSection>

        {/* PROJECT GRID */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  type: 'spring',
                  stiffness: 260,
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;