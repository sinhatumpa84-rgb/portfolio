export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  category: 'AI/ML' | 'Full-Stack' | 'Assistive Tech' | 'Embedded / Systems';
  technologies: string[];
  problemSolved: string;
  keyFeatures: string[];
  architecture: string;
  results: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  sketchIcon: string;
  colorTheme: 'amber' | 'blue' | 'emerald' | 'rose';
  handwrittenNote: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  accent: 'kraft' | 'blue' | 'emerald' | 'amber' | 'coral' | 'purple';
  skills: {
    name: string;
    level?: string;
    note?: string;
    iconName: string;
  }[];
}

export interface HackathonBuild {
  id: string;
  event: string;
  projectBuilt: string;
  role: string;
  badge: string;
  timeframe: string;
  problem: string;
  solution: string;
  takeaway: string;
  skillsDemonstrated: string[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  event: string;
  category: 'hackathon' | 'competition' | 'leadership' | 'milestone';
  description: string;
  badgeText: string;
  handwrittenComment?: string;
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  statusOrYear: string;
  details: string[];
  handwrittenAnnotation: string;
}
