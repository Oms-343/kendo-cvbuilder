import React, { useState, useRef } from "react";
import SidebarNavigation from "./SidebarNavigation";
import BasicsForm from "../forms/BasicsForm";
import SummaryForm from "../forms/SummaryForm";
import EducationForm from "../forms/EducationForm";
import ExperienceForm from "../forms/ExperienceForm";
import SkillsForm from "../forms/SkillsForm";

interface FormSection {
  id: string;
  title: string;
  icon: string;
  component: React.ComponentType;
}

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

const LeftPanel: React.FC = () => {
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
    <div className="left-panel-container">
      {/* Sidebar Navigation */}
      <div className="sidebar-navigation">
        <SidebarNavigation
          sections={formSections}
          activeSection={activeSection}
          onSectionClick={handleSectionClick}
        />
      </div>

      {/* Form Area */}
      <div className="form-area" ref={formAreaRef}>
        <div className="form-content">
          {formSections.map((section) => {
            const FormComponent = section.component;
            return (
              <div
                key={section.id}
                id={`form-${section.id}`}
                className="form-section"
              >
                <div className="form-section-header">
                  <h2>{section.title}</h2>
                </div>
                <div className="form-section-content">
                  <FormComponent />
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
