// Data types for the CV
export interface BasicsData {
  fullName: string;
  headline: string;
  email: string;
  phone: string;
  website: string;
  linkedin: string;
  location: string;
  photo: string | null;
}

export interface SummaryData {
  content: string;
}

export interface EducationItem {
  id: string;
  course: string;
  institution: string;
  year: string;
  score: string;
}

export interface ExperienceItem {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface SkillsData {
  technical: string[];
  soft: string[];
}

export interface CvData {
  basics: BasicsData;
  summary: SummaryData;
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: SkillsData;
}

export interface FormSection {
  id: string;
  title: string;
  icon: string;
  component: React.ComponentType<any>;
}
