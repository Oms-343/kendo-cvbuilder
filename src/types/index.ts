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

export interface SidebarSection {
  id: string;
  title: string;
  icon: string;
}

// Component Props Interfaces
export interface FormsProps {
  cvData: CvData;
  updateBasics: (data: Partial<BasicsData>) => void;
  updateSummary: (data: Partial<SummaryData>) => void;
  updateEducation: (education: EducationItem[]) => void;
  updateExperience: (experience: ExperienceItem[]) => void;
  updateSkills: (data: Partial<SkillsData>) => void;
  formAreaRef: React.RefObject<HTMLDivElement | null>;
  formRefs: {
    basics: React.RefObject<HTMLDivElement | null>;
    summary: React.RefObject<HTMLDivElement | null>;
    education: React.RefObject<HTMLDivElement | null>;
    experience: React.RefObject<HTMLDivElement | null>;
    skills: React.RefObject<HTMLDivElement | null>;
  };
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

export interface CvPreviewProps {
  cvData: CvData;
  template: string;
}

// Template definitions
export interface Template {
  id: string;
  name: string;
  description: string;
}

export const templates: Template[] = [
  {
    id: "classic",
    name: "Classic",
    description:
      "A simple single column layout for a straightforward presentation",
  },
  {
    id: "modern",
    name: "Modern",
    description:
      "A modern template with a clean and professional design with 2 columns.",
  },
  {
    id: "clean",
    name: "Clean",
    description:
      "A clean and professional design with a single column and table.",
  },
  {
    id: "blue",
    name: "Formal",
    description:
      "A single column layout with a clean and professional design blue color.",
  },
  {
    id: "classicGrey",
    name: "Corporate",
    description:
      "A single column layout with a clean and professional design grey color.",
  },
  {
    id: "modernBlue",
    name: "Professional",
    description:
      "A modern template with a clean and professional design green color.",
  },
];
