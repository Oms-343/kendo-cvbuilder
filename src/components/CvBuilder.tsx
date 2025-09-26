import React, { useState, useRef } from "react";
import Forms from "./LeftPanel/Forms";
import SidebarNavigation from "./LeftPanel/SidebarNavigation";
import CvPreview from "./MidPanel/CvPreview";
import TemplateSelector from "./RightPanel/TemplateSelector";
import type {
  BasicsData,
  SummaryData,
  EducationItem,
  ExperienceItem,
  SkillsData,
  CvData,
  SidebarSection,
} from "../types";

const CvBuilder: React.FC = () => {
  // Main CV data state
  const [cvData, setCvData] = useState<CvData>({
    basics: {
      fullName: "",
      headline: "",
      email: "",
      phone: "",
      website: "",
      linkedin: "",
      location: "",
      photo: null,
    },
    summary: {
      content: "",
    },
    education: [],
    experience: [],
    skills: {
      technical: [],
      soft: [],
    },
  });

  const [selectedTemplate, setSelectedTemplate] = useState<string>("classic");

  // Form sections configuration for sidebar navigation
  const formSections: SidebarSection[] = [
    { id: "basics", title: "Basics", icon: "user" },
    { id: "summary", title: "Summary", icon: "file-text" },
    { id: "education", title: "Education", icon: "graduation-cap" },
    { id: "experience", title: "Experience", icon: "briefcase" },
    { id: "skills", title: "Skills", icon: "star" },
  ];

  // Active section state and refs
  const [activeSection, setActiveSection] = useState("basics");
  const formAreaRef = useRef<HTMLDivElement>(null);

  // Refs for each form section
  const formRefs = {
    basics: useRef<HTMLDivElement>(null),
    summary: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
  };

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);

    // Scroll to the section
    const element = document.getElementById(`form-${sectionId}`);
    if (element && formAreaRef.current) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Update functions for each section
  const updateBasics = (data: Partial<BasicsData>) => {
    setCvData((prev) => ({
      ...prev,
      basics: { ...prev.basics, ...data },
    }));
  };

  const updateSummary = (data: Partial<SummaryData>) => {
    setCvData((prev) => ({
      ...prev,
      summary: { ...prev.summary, ...data },
    }));
  };

  const updateEducation = (education: EducationItem[]) => {
    setCvData((prev) => ({
      ...prev,
      education,
    }));
  };

  const updateExperience = (experience: ExperienceItem[]) => {
    setCvData((prev) => ({
      ...prev,
      experience,
    }));
  };

  const updateSkills = (data: Partial<SkillsData>) => {
    setCvData((prev) => ({
      ...prev,
      skills: { ...prev.skills, ...data },
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Left Panel - Sidebar + Forms */}
      <div
        style={{
          width: "400px",
          height: "100%",
          backgroundColor: "#ffffff",
          borderRight: "1px solid #e5e5e5",
          boxShadow:
            "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
          display: "flex",
          flexDirection: "row",
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

        {/* Forms Area */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Forms
            cvData={cvData}
            updateBasics={updateBasics}
            updateSummary={updateSummary}
            updateEducation={updateEducation}
            updateExperience={updateExperience}
            updateSkills={updateSkills}
            formAreaRef={formAreaRef}
            formRefs={formRefs}
          />
        </div>
      </div>

      {/* Middle Panel - CV Preview */}
      <div
        style={{
          flex: 1,
          height: "100%",
          backgroundColor: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              width: "210mm",
              minHeight: "297mm",
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
              margin: "0 auto",
              borderRadius: "4px",
              border: "1px solid #e5e5e5",
              overflow: "hidden",
            }}
          >
            <CvPreview cvData={cvData} template={selectedTemplate} />
          </div>
        </div>
      </div>

      {/* Right Panel - Template Selector */}
      <div
        style={{
          width: "300px",
          height: "100%",
          backgroundColor: "#ffffff",
          borderLeft: "1px solid #e5e5e5",
          boxShadow:
            "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TemplateSelector
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
      </div>
    </div>
  );
};

export default CvBuilder;
