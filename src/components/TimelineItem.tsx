import React from 'react';
import { Experience } from '../types';

interface TimelineItemProps {
  item: Experience;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, isLast }) => {
  return (
    <div className="relative pl-10 pb-10">

      {/* Timeline vertical line */}
      {!isLast && (
        <div className="absolute left-[9px] top-3 bottom-0 w-px bg-muted"></div>
      )}

      {/* Timeline neon node */}
      <div className="absolute left-0 top-2 w-5 h-5 border border-accent bg-bgprimary"></div>

      {/* Content block */}
      <div className="bg-bgsecondary border border-muted p-6 transition hover:border-accent">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
          <h3 className="text-xl font-bold tracking-tight">
            {item.role}
          </h3>

          <span className="text-sm tracking-wider neon-text mt-1 md:mt-0">
            {item.period}
          </span>
        </div>

        {/* Company */}
        <p className="text-textdim mb-5 tracking-wide">
          {item.company}
        </p>

        {/* Responsibilities */}
        <ul className="space-y-3">
          {item.description.map((desc, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 bg-accent"></span>
              <span className="text-textdim leading-relaxed">
                {desc}
              </span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default TimelineItem;