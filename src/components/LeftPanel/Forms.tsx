import React, { useState, useRef } from "react";
import SidebarNavigation from "./SidebarNavigation";
import BasicsForm from "../forms/BasicsForm";
import SummaryForm from "../forms/SummaryForm";
import EducationForm from "../forms/EducationForm";
import ExperienceForm from "../forms/ExperienceForm";
import SkillsForm from "../forms/SkillsForm";
import type {
  CvData,
  BasicsData,
  SummaryData,
  EducationItem,
  ExperienceItem,
  SkillsData,
  FormSection,
} from "../../types";

interface LeftPanelProps {
  cvData: CvData;
  updateBasics: (data: Partial<BasicsData>) => void;
  updateSummary: (data: Partial<SummaryData>) => void;
  updateEducation: (education: EducationItem[]) => void;
  updateExperience: (experience: ExperienceItem[]) => void;
  updateSkills: (data: Partial<SkillsData>) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({
  cvData,
  updateBasics,
  updateSummary,
  updateEducation,
  updateExperience,
  updateSkills,
}) => {
  const formSections: FormSection[] = [
    { id: "basics", title: "Basics", icon: "user", component: BasicsForm },
    {
      id: "summary",
      title: "Summary",
      icon: "file-text",
      component: SummaryForm,
    },
    {
      id: "education",
      title: "Education",
      icon: "graduation-cap",
      component: EducationForm,
    },
    {
      id: "experience",
      title: "Experience",
      icon: "briefcase",
      component: ExperienceForm,
    },
    { id: "skills", title: "Skills", icon: "star", component: SkillsForm },
  ];
  const [activeSection, setActiveSection] = useState("basics");
  const formAreaRef = useRef<HTMLDivElement>(null);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);

    // Scroll to the section
    const element = document.getElementById(`form-${sectionId}`);
    if (element && formAreaRef.current) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Sidebar Navigation */}
      <div
        style={{
          width: "60px",
          backgroundColor: "#f8f9fa",
          borderRight: "1px solid #e0e0e0",
          display: "flex",
          flexDirection: "column",
          padding: "20px 0",
          boxSizing: "border-box",
        }}
      >
        <SidebarNavigation
          sections={formSections}
          activeSection={activeSection}
          onSectionClick={handleSectionClick}
        />
      </div>

      {/* Form Area */}
      <div
        style={{
          flex: "1",
          overflowY: "auto",
          padding: "0",
        }}
        ref={formAreaRef}
        onScroll={(e) => {
          // Custom scrollbar styling
          const target = e.currentTarget;
          if (target.scrollHeight > target.clientHeight) {
            // Add custom scrollbar styling here if needed
          }
        }}
      >
        <div
          style={{
            width: "100%",
          }}
        >
          {formSections.map((section) => {
            const FormComponent = section.component;

            // Pass appropriate props to each form component
            const getFormProps = () => {
              switch (section.id) {
                case "basics":
                  return {
                    data: cvData.basics,
                    onUpdate: updateBasics,
                  };
                case "summary":
                  return {
                    data: cvData.summary,
                    onUpdate: updateSummary,
                  };
                case "education":
                  return {
                    data: cvData.education,
                    onUpdate: updateEducation,
                  };
                case "experience":
                  return {
                    data: cvData.experience,
                    onUpdate: updateExperience,
                  };
                case "skills":
                  return {
                    data: cvData.skills,
                    onUpdate: updateSkills,
                  };
                default:
                  return {};
              }
            };

            return (
              <div
                key={section.id}
                id={`form-${section.id}`}
                style={{
                  padding: "0",
                  borderBottom: "1px solid #f0f0f0",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#f8f9fa",
                    padding: "16px 24px",
                    borderBottom: "1px solid #e0e0e0",
                    position: "sticky",
                    top: "0",
                    zIndex: "10",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <h2
                    style={{
                      margin: "0",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#333333",
                      flex: "1",
                    }}
                  >
                    {section.title}
                  </h2>
                </div>
                <div
                  style={{
                    padding: "24px",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <FormComponent {...getFormProps()} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
