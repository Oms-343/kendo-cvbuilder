import React, { useState } from "react";
import LeftPanel from "./LeftPanel/Forms";
import CvPreview from "./MidPanel/CvPreview";

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
        <LeftPanel
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
        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid #e5e5e5",
          }}
        >
          <h3
            style={{
              margin: "0",
              fontSize: "18px",
              fontWeight: "600",
              color: "#333",
            }}
          >
            Template Selector
          </h3>
          <p
            style={{
              margin: "8px 0 0 0",
              fontSize: "14px",
              color: "#666",
            }}
          >
            Choose a design for your resume
          </p>
        </div>
        <div
          style={{
            flex: 1,
            padding: "20px",
            overflowY: "auto",
          }}
        >
          {/* Template options */}
          <div
            style={{
              display: "grid",
              gap: "16px",
            }}
          >
            {["modern", "classic", "professional", "creative"].map(
              (template) => (
                <div
                  key={template}
                  onClick={() => setSelectedTemplate(template)}
                  style={{
                    padding: "16px",
                    border: `2px solid ${
                      selectedTemplate === template ? "#1976d2" : "#e5e5e5"
                    }`,
                    borderRadius: "8px",
                    cursor: "pointer",
                    backgroundColor:
                      selectedTemplate === template ? "#f3f8ff" : "#ffffff",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "500",
                      fontSize: "14px",
                      color: selectedTemplate === template ? "#1976d2" : "#333",
                      textTransform: "capitalize",
                    }}
                  >
                    {template}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#666",
                      marginTop: "4px",
                    }}
                  >
                    {template === "modern" && "Clean and modern design"}
                    {template === "classic" && "Traditional professional look"}
                    {template === "professional" && "Business-focused layout"}
                    {template === "creative" && "Creative and colorful design"}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvBuilder;
