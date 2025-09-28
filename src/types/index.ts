import classicTemplateImage from "../assets/classic.png";
import modernTemplateImage from "../assets/modern.png";
import cleanTemplateImage from "../assets/clean.png";
import formalTemplateImage from "../assets/formal.png";
import corporateTemplateImage from "../assets/corporate.png";

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
  location: string;
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
  languages: string[];
}

// Component Props Interfaces
export interface FormsProps {
  cvData: CvData;
  updateBasics: (data: Partial<BasicsData>) => void;
  updateSummary: (data: Partial<SummaryData>) => void;
  updateEducation: (education: EducationItem[]) => void;
  updateExperience: (experience: ExperienceItem[]) => void;
  updateSkills: (data: Partial<SkillsData>) => void;
  updateLanguages: (languages: string[]) => void;
  formAreaRef: React.RefObject<HTMLDivElement | null>;
  formRefs: {
    basics: React.RefObject<HTMLDivElement | null>;
    summary: React.RefObject<HTMLDivElement | null>;
    education: React.RefObject<HTMLDivElement | null>;
    experience: React.RefObject<HTMLDivElement | null>;
    skills: React.RefObject<HTMLDivElement | null>;
    languages: React.RefObject<HTMLDivElement | null>;
  };
}

export interface FormSection {
  id: string;
  title: string;
  icon: string;
  component: React.ComponentType<any>;
}

export interface SidebarSection {
  id: string;
  title: string;
  icon: string;
}

export interface SidebarNavigationProps {
  sections: SidebarSection[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export interface TemplateSelectorProps {
  selectedTemplate: string;
  setSelectedTemplate: (template: string) => void;
}

export interface BasicsFormProps {
  data: BasicsData;
  onUpdate: (data: Partial<BasicsData>) => void;
}

export interface SummaryFormProps {
  data: SummaryData;
  onUpdate: (data: Partial<SummaryData>) => void;
}

export interface EducationFormProps {
  data: EducationItem[];
  onUpdate: (education: EducationItem[]) => void;
}

export interface ExperienceFormProps {
  data: ExperienceItem[];
  onUpdate: (experience: ExperienceItem[]) => void;
}

export interface SkillsFormProps {
  data: SkillsData;
  onUpdate: (data: Partial<SkillsData>) => void;
}

export interface LanguagesFormProps {
  data: string[];
  onUpdate: (languages: string[]) => void;
}

export interface CvPreviewProps {
  cvData: CvData;
  template: string;
}

export interface PdfGeneratorProps {
  cvData: CvData;
  template: string;
}

// Template definitions
export interface Template {
  id: string;
  name: string;
  description: string;
  image?: string;
  comingSoon?: boolean;
}

export interface ClassicTemplateProps {
  cvData: CvData;
}

export interface ModernTemplateProps {
  cvData: CvData;
}

export const templates: Template[] = [
  {
    id: "classic",
    name: "Classic",
    description:
      "A simple single column layout for a straightforward presentation",
    image: classicTemplateImage,
  },
  {
    id: "modern",
    name: "Modern",
    description:
      "A modern template with a clean and professional design with 2 columns.",
    image: modernTemplateImage,
  },
  {
    id: "clean",
    name: "Clean",
    description:
      "A clean and professional design with a single column and table.",
    image: cleanTemplateImage,
    comingSoon: true,
  },
  {
    id: "blue",
    name: "Formal",
    description:
      "A single column layout with a clean and professional design blue color.",
    image: formalTemplateImage,
    comingSoon: true,
  },
  {
    id: "classicGrey",
    name: "Corporate",
    description:
      "A single column layout with a clean and professional design grey color.",
    image: corporateTemplateImage,
    comingSoon: true,
  },
];
