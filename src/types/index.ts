export type ProjectCategory =
  | "web-app"
  | "mobile"
  | "design-system"
  | "open-source"
  | "experiment";

export type ExperienceType =
  | "full-time"
  | "contract"
  | "freelance"
  | "internship";

export interface SocialLinks {
  github: string;
  linkedin: string;
  // twitter: string;
  // dribbble: string;
}

export interface Personal {
  name: string;
  tagline: string;
  bio: string;
  location: string;
  availableForWork: boolean;
  email: string;
  social: SocialLinks;
  yearsOfExperience: number;
  resumeUrl: string;
}

export interface CaseStudy {
  challenge: string;
  solution: string;
  outcome: string;
  metrics: string[];
}

export interface ProjectImage {
  url: string;
  alt: string;
}

/** public = link aktif · internal = repo ada tapi tidak dibagikan · none = tidak ada repo */
export type ProjectGitHub =
  | { access: "public"; url: string }
  | { access: "internal"; reason?: string }
  | { access: "none"; reason?: string };

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  year: number;
  category: ProjectCategory;
  tags: string[];
  imageUrl: string;
  additionalImages?: ProjectImage[];
  liveUrl?: string;
  github: ProjectGitHub;
  featured: boolean;
  accentColor: string;
  caseStudy?: CaseStudy;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  duration: string;
  type: ExperienceType;
  description: string;
  highlights: string[];
  techUsed: string[];
  companyUrl?: string;
}

export interface Skills {
  frontend: string[];
  backend: string[];
  tooling: string[];
  design: string[];
  currently_learning: string[];
}

export interface TechStackItem {
  name: string;
  icon?: string;
  category: string;
}

export interface Principle {
  id: string;
  number: string;
  title: string;
  description: string;
  icon?: string;
  featured?: boolean;
}

export type PreferredContact = "email" | "linkedin";

export interface ContactAboutMe {
  description: string;
  photoUrl: string;
  photoAlt: string;
}

export interface ContactSocialMedia {
  instagram: string;
  github: string;
}

export interface Contact {
  headline: string;
  subtext: string;
  email: string;
  preferredContact: PreferredContact;
  availability: string;
  responseTime: string;
  aboutMe: ContactAboutMe;
  socialMedia: ContactSocialMedia;
}
