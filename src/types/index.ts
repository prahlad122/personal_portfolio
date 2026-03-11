/* ================= NAVIGATION ================= */
export interface NavItem {
  label: string;
  href: string;
}


/* ================= SKILLS ================= */

export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'tools';

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
  level: number; // 1–5 proficiency
  featured?: boolean; // highlight important skills
}


/* ================= PROJECTS ================= */

export type ProjectStatus = 'live' | 'in-progress' | 'archived';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];

  liveUrl?: string;
  githubUrl?: string;

  featured?: boolean;
  status?: ProjectStatus;
}


/* ================= EXPERIENCE ================= */

export type ExperienceType = 'internship' | 'full-time' | 'freelance' | 'contract';

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];

  type?: ExperienceType;
  location?: string;
}


/* ================= EDUCATION ================= */

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;

  grade?: string;
  location?: string;
}


/* ================= SOCIAL LINKS ================= */

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username?: string;
}


/* ================= THEME ================= */

export type ThemeMode = 'light' | 'dark';

export interface ThemeContextType {
  theme: 'dark';
}