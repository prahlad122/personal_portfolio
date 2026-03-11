import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
}

type IconsType = {
  [key: string]: React.ElementType;
};

const lucideIcons = Icons as unknown as IconsType;

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const IconComponent =
    lucideIcons[skill.icon.charAt(0).toUpperCase() + skill.icon.slice(1)] ||
    lucideIcons.Code;

  const percent = skill.level * 20;

  return (
    <motion.div
      className="group bg-bgsecondary border border-muted p-4 sm:p-6 transition hover:border-accent overflow-hidden"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      {/* TOP ROW */}
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 min-w-0">
        
        <div className="flex-shrink-0 p-2 sm:p-3 border border-muted group-hover:border-accent transition">
          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 neon-text" />
        </div>

        <h3 className="
          text-sm sm:text-base md:text-lg 
          font-semibold tracking-wide 
          break-words whitespace-normal
        ">
          {skill.name.toUpperCase()}
        </h3>
      </div>

      {/* PROGRESS STRIP */}
      <div className="h-2 w-full bg-bgprimary border border-muted overflow-hidden">
        <motion.div
          className="h-full bg-accent"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;