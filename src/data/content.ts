import { NavItem, Skill, Project, Experience, Education, SocialLink } from '../types';
import smartComplaintImg from "../assets/projects/complaint.png";
import InventoryImg from "../assets/projects/inventory.png";

/* ================= NAVIGATION ================= */
export const navItems: NavItem[] = [
  { label: 'HOME', href: '#home' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'CONTACT', href: '#contact' },
];

/* ================= SKILLS ================= */
export const skills: Skill[] = [
  { name: 'HTML5', icon: 'code', category: 'frontend', level: 5 },
  { name: 'CSS3', icon: 'code', category: 'frontend', level: 5 },
  { name: 'JavaScript', icon: 'code', category: 'frontend', level: 4 },
  { name: 'TypeScript', icon: 'code', category: 'frontend', level: 4 },
  { name: 'React.js', icon: 'component', category: 'frontend', level: 4 },
  { name: 'Tailwind CSS', icon: 'layout', category: 'frontend', level: 5 },

  { name: 'Node.js', icon: 'server', category: 'backend', level: 4 },
  { name: 'Express.js', icon: 'server', category: 'backend', level: 4 },

  { name: 'MongoDB', icon: 'database', category: 'database', level: 4 },
  { name: 'MySQL', icon: 'database', category: 'database', level: 3 },

  { name: 'Git', icon: 'git-branch', category: 'tools', level: 5 },
  { name: 'GitHub', icon: 'github', category: 'tools', level: 5 },
];

/* ================= PROJECTS ================= */
export const projects: Project[] = [
  
  {
    id: 'project-1',
    title: 'Smart Complaint Classification System for Municipal Corporation using MERN Stack and Generative AI',
    description:
      'The Smart Complaint Classification System is a web-based platform developed to streamline the process of registering, classifying, and managing citizen complaints for municipal corporations. Citizens can submit complaints related to civic issues such as garbage collection, water supply, road damage, street lighting, sewage, and sanitation.',
    image: smartComplaintImg,
    technologies: ['React', 'javascript','Axios', 'Tailwind CSS' , 'express','mongoose' , 'React Router', 'JWT' , 'Gemini API key'],
    liveUrl: 'https://smartcomplaints.vercel.app',
    githubUrl: 'https://github.com/prahlad122/Taskify',
  },
  {
    id: 'project-2',
    title: 'Inventory management and Billing system',
    description:
  "A full-stack Inventory Management and Billing System developed using the MERN Stack with JWT-based authentication and role-based access control. The application follows industry best practices and provides a structured Master module for managing Categories, Subcategories, Taxes, and Items, enabling efficient inventory organization. It also includes a Transaction module to handle inventory and billing operations, ensuring accurate stock management and streamlined business workflows through secure REST APIs and a responsive user interface.",
    image:InventoryImg,
    technologies: ['React', 'javascript', 'Tailwind CSS', 'JWT' , 'express','mongoose' , 'Axios'],
    liveUrl: 'https://inventoryhub1.netlify.app',
    githubUrl: 'https://github.com/prahlad122/Taskify',
  },
  {
    id: 'project-3',
    title: 'Full stack task management',
    description:
      'A responsive task management app enabling task scheduling, categorization, priority tracking, and progress visualization.',
    image:
      'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'javascript', 'Tailwind CSS', 'Local Storage' , 'express','mongoose'],
    liveUrl: 'https://taskify-frontend-d57i.onrender.com',
    githubUrl: 'https://github.com/prahlad122/Taskify',
  },
  {
    id: 'project-3',
    title: 'Airbnb inspired Travel Booking Web Application',
    description:
      'A scalable MERN-based commerce platform with authentication, product management, cart system, order processing, and secure payment integration.',
    image:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'cloudinary'],
    liveUrl: 'https://airbnb-1-frontend.onrender.com',
    githubUrl: 'https://github.com/prahlad122/Airbnb',
    featured: true,
  },
];

/* ================= EXPERIENCE ================= */
export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'MERN Stack Developer Intern',
    company: 'Codec Technology',
    period: 'Oct 2025 — Nov 2025',
    description: [
      'Developed and deployed full-stack web applications using MongoDB, Express.js, React, and Node.js',
      'Engineered RESTful APIs and integrated frontend with backend services',
      'Designed responsive and accessible UI components for production-grade apps',
    ],
  },
];

/* ================= EDUCATION ================= */
export const education: Education[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Technology — Computer Science & Engineering',
    institution: 'BBD UNIVERSITY LUCKNOW',
    period: '2022 — 2026',
    description:
      'Focused on software engineering, data structures & algorithms, operating systems, DBMS, and full-stack application development.',
  },
  {
    id: 'edu-1',
    degree: 'High school & Higher secondary school',
    institution: 'Shree Durga ji Inter college sehda Azamgarh.',
    period: '2018 — 2020',
    description:
      'Physics , Chemistry , Mathematics , English'
  },
];

/* ================= SOCIAL LINKS ================= */
export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/prahladnishad', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/prahladnishad', icon: 'linkedin' },
  { platform: 'Twitter', url: 'https://twitter.com/prahladnishad', icon: 'twitter' },
  { platform: 'Email', url: 'mailto:prahladji1592003@gmail.com', icon: 'mail' },
];