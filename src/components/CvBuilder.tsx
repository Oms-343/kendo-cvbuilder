import React, { useState, useRef } from "react";
import { Splitter } from "@progress/kendo-react-layout";
import type {
  SplitterOnChangeEvent,
  SplitterPaneProps,
} from "@progress/kendo-react-layout";
import Forms from "./LeftPanel/Forms";
import SidebarNavigation from "./LeftPanel/SidebarNavigation";
import TemplateSelector from "./RightPanel/TemplateSelector";
import PdfGenerator from "./MidPanel/PdfGenerator";
import type {
  BasicsData,
  SummaryData,
  EducationItem,
  ExperienceItem,
  SkillsData,
  CvData,
  SidebarSection,
} from "../types";

// Styles - All CSS objects organized in one place
const styles = {
  mainContainer: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#f5f5f5",
  } as React.CSSProperties,

  leftPaneContainer: {
    display: "flex",
    height: "100%",
    backgroundColor: "#ffffff",
  } as React.CSSProperties,

  formsColumn: {
    height: "100%",
    width: "100%",
    overflowY: "auto",
    borderRight: "1px solid #e5e5e5",
    backgroundColor: "#ffffff",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  } as React.CSSProperties,

  centerPane: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
  } as React.CSSProperties,

  centerPaneInner: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "20px",
    overflowY: "auto",
  } as React.CSSProperties,

  cvPreviewContainer: {
    width: "210mm",
    minHeight: "297mm",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
    margin: "0 auto",
    borderRadius: "4px",
    border: "1px solid #e5e5e5",
    overflow: "hidden",
  } as React.CSSProperties,

  rightPane: {
    height: "100%",
    backgroundColor: "#ffffff",
    borderLeft: "1px solid #e5e5e5",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    display: "flex",
    flexDirection: "column",
  } as React.CSSProperties,
};

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
    languages: [],
  });

  const [selectedTemplate, setSelectedTemplate] = useState<string>("classic");

  // Splitter panes state
  const [panes, setPanes] = useState<SplitterPaneProps[]>([
    {
      size: "450px",
      min: "200px",
      max: "500px",
      // collapsible: true,
      // resizable: true,
    },
    {
      resizable: false,
      collapsible: false,
    },
    {
      size: "250px",
      min: "250px",
      max: "400px",
      // collapsible: true,
      // resizable: true,
    },
  ]);

  // Splitter onChange handler
  const handleSplitterChange = (event: SplitterOnChangeEvent) => {
    setPanes(event.newState);
  };

  // Form sections configuration for sidebar navigation
  const formSections: SidebarSection[] = [
    { id: "basics", title: "Basics", icon: "user" },
    { id: "summary", title: "Summary", icon: "file-text" },
    { id: "education", title: "Education", icon: "graduation-cap" },
    { id: "experience", title: "Experience", icon: "briefcase" },
    { id: "skills", title: "Skills", icon: "star" },
    { id: "languages", title: "Languages", icon: "globe" },
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
    languages: useRef<HTMLDivElement>(null),
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

  const updateLanguages = (languages: string[]) => {
    setCvData((prev) => ({
      ...prev,
      languages,
    }));
  };

  return (
    <div style={styles.mainContainer}>
      <Splitter
        style={{ height: "100%" }}
        orientation="horizontal"
        panes={panes}
        onChange={handleSplitterChange}
      >
        {/* Left pane: Sidebar Navigation + Forms */}
        <div style={styles.leftPaneContainer}>
          {/* Left sidebar with navigation */}
          <SidebarNavigation
            sections={formSections}
            activeSection={activeSection}
            onSectionClick={handleSectionClick}
          />

          {/* Forms column */}
          <div style={styles.formsColumn}>
            <Forms
              cvData={cvData}
              updateBasics={updateBasics}
              updateSummary={updateSummary}
              updateEducation={updateEducation}
              updateExperience={updateExperience}
              updateSkills={updateSkills}
              updateLanguages={updateLanguages}
              formAreaRef={formAreaRef}
              formRefs={formRefs}
            />
          </div>
        </div>

        {/* Center pane: Resume preview with PDF generation (non-resizable, non-collapsible) */}
        <div style={styles.centerPane}>
          <div style={styles.centerPaneInner}>
            <div style={styles.cvPreviewContainer}>
              <PdfGenerator cvData={cvData} template={selectedTemplate} />
            </div>
          </div>
        </div>

        {/* Right pane: Template selector (resizable + collapsible) */}
        <div style={styles.rightPane}>
          <TemplateSelector
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
          />
        </div>
      </Splitter>
    </div>
  );
};

export default CvBuilder;
