export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link?: string;
  tags?: string[];
  features?: string[];
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  type: 'course' | 'workshop' | 'certification';
}

export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
    backgroundImage: string;
  };
  about: {
    name: string;
    role: string;
    bio: string; // The generated text
    image: string; // Profile picture
    education: {
      degree: string;
      institution: string;
      year: string;
    };
    location: string;
  };
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    linkedin: string;
    github: string;
    location: string;
    cvUrl: string;
  };
  projects: Project[];
  skills: {
    category: string;
    items: Skill[];
  }[];
  experience: Experience[];
  certificates: Certificate[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface BioFormData {
  identity: string;
  service: string;
  targetAudience: string;
  usp: string;
  experience: string;
  story: string;
}