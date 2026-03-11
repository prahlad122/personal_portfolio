import React from "react";
import { Education } from "../types";

interface EducationItemProps {
  item: Education;
  isLast: boolean;
}

const EducationItem: React.FC<EducationItemProps> = ({ item, isLast }) => {
  return (
    <div className="relative pl-10 pb-10">
      {!isLast && (
        <div className="absolute left-[9px] top-3 bottom-0 w-px bg-muted"></div>
      )}

      <div className="absolute left-0 top-2 w-5 h-5 border border-accent bg-bgprimary"></div>

      <div className="bg-bgsecondary border border-muted p-6 transition hover:border-accent">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
          <h3 className="text-xl font-bold tracking-tight">{item.degree}</h3>

          <span className="text-sm tracking-wider neon-text mt-1 md:mt-0">
            {item.period}
          </span>
        </div>

        <p className="text-textdim mb-4 tracking-wide">{item.institution}</p>

        <p className="text-textdim leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
};

export default EducationItem;
