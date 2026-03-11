import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, GitBranch } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SkillCard from '../components/SkillCard';
import { skills } from '../data/content';

type SkillCategory = 'all' | 'frontend' | 'backend' | 'database' | 'tools';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const categories = [
    { id: 'all', label: 'ALL', icon: Code },
    { id: 'frontend', label: 'FRONTEND', icon: Code },
    { id: 'backend', label: 'BACKEND', icon: Server },
    { id: 'database', label: 'DATABASE', icon: Database },
    { id: 'tools', label: 'TOOLS', icon: GitBranch },
  ];

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">

        {/* SECTION HEADER */}
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            MY <span className="neon-text">SKILLS</span>
          </h2>

          <p className="text-textdim max-w-2xl mx-auto">
            Technologies and tools I use to design and build
            modern digital products.
          </p>
        </AnimatedSection>

        {/* CATEGORY FILTERS */}
        <AnimatedSection
          className="flex flex-wrap justify-center gap-4 mb-16"
          delay={0.2}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const active = activeCategory === category.id;

            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id as SkillCategory)}
                className={`flex items-center gap-3 px-6 py-3 border text-sm tracking-wider transition ${
                  active
                    ? 'border-accent text-accent'
                    : 'border-muted text-textdim hover:border-accent hover:text-accent'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Icon size={16} />
                {category.label}
              </motion.button>
            );
          })}
        </AnimatedSection>

        {/* SKILLS GRID */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          layout
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{
                duration: 0.35,
                delay: index * 0.05,
                type: 'spring',
                stiffness: 260,
              }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;