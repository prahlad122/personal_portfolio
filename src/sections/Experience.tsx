import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import TimelineItem from '../components/TimelineItem';
import EducationItem from '../components/EducationItem';
import { experiences, education } from '../data/content';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">

        {/* SECTION HEADER */}
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            EXPERIENCE & <span className="neon-text">EDUCATION</span>
          </h2>

          <p className="text-textdim max-w-2xl mx-auto">
            My professional journey and academic background.
          </p>
        </AnimatedSection>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">

          {/* WORK EXPERIENCE */}
          <AnimatedSection delay={0.2}>
            <div className="mb-10 flex items-center gap-4">
              <div className="w-12 h-[2px] bg-accent"></div>
              <h3 className="text-2xl font-bold tracking-wide">
                WORK EXPERIENCE
              </h3>
            </div>

            <div>
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={exp.id}
                  item={exp}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </AnimatedSection>

          {/* EDUCATION */}
          <AnimatedSection delay={0.4}>
            <div className="mb-10 flex items-center gap-4">
              <div className="w-12 h-[2px] bg-accent"></div>
              <h3 className="text-2xl font-bold tracking-wide">
                EDUCATION
              </h3>
            </div>

            <div>
              {education.map((edu, index) => (
                <EducationItem
                  key={edu.id}
                  item={edu}
                  isLast={index === education.length - 1}
                />
              ))}
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default Experience;