import React, { useState } from "react";
import Forms from "./LeftPanel/Forms";
import CvPreview from "./MidPanel/CvPreview";
import TemplateSelector from "./RightPanel/TemplateSelector";
import type {
  BasicsData,
  SummaryData,
  EducationItem,
  ExperienceItem,
  SkillsData,
  CvData,
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

  const [selectedTemplate, setSelectedTemplate] = useState<string>("modern");

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
      {/* Left Panel - Forms */}
      <div
        style={{
          width: "400px",
          height: "100%",
          backgroundColor: "#ffffff",
          borderRight: "1px solid #e5e5e5",
          boxShadow:
            "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Forms
          cvData={cvData}
          updateBasics={updateBasics}
          updateSummary={updateSummary}
          updateEducation={updateEducation}
          updateExperience={updateExperience}
          updateSkills={updateSkills}
        />
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
