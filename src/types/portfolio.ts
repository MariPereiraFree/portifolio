export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  avatar: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  featured: boolean;
  gradient: string;
}

export interface Job {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  href: string;
  color: string;
}

export interface FormState {
  name: string;
  email: string;
  message: string;
}

export interface Stat {
  value: string;
  label: string;
}
