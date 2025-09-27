import React from "react";
import BasicsForm from "../Forms/BasicsForm";
import SummaryForm from "../Forms/SummaryForm";
import EducationForm from "../Forms/EducationForm";
import ExperienceForm from "../Forms/ExperienceForm";
import SkillsForm from "../Forms/SkillsForm";
import type { FormsProps } from "../../types";

const sectionStyle: React.CSSProperties = {
  borderBottom: "1px solid #f0f0f0",
};

const headerStyle: React.CSSProperties = {
  backgroundColor: "#f8f9fa",
  padding: "16px 24px",
  borderBottom: "1px solid #e0e0e0",
  position: "sticky",
  top: "0",
  zIndex: "10",
};

const contentStyle: React.CSSProperties = {
  padding: "24px",
  paddingBottom: "40px",
  backgroundColor: "#ffffff",
};

const Forms: React.FC<FormsProps> = ({
  cvData,
  updateBasics,
  updateSummary,
  updateEducation,
  updateExperience,
  updateSkills,
  formAreaRef,
  formRefs,
}) => {
  return (
    <div
      ref={formAreaRef}
      className="scrollable-area"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <section id="form-basics" ref={formRefs.basics} style={sectionStyle}>
        <div style={headerStyle}>
          <h1>Basics</h1>
        </div>
        <div style={contentStyle}>
          <BasicsForm data={cvData.basics} onUpdate={updateBasics} />
        </div>
      </section>

      <section id="form-summary" ref={formRefs.summary} style={sectionStyle}>
        <div style={headerStyle}>
          <h1>Summary</h1>
        </div>
        <div style={contentStyle}>
          <SummaryForm data={cvData.summary} onUpdate={updateSummary} />
        </div>
      </section>

      <section
        id="form-education"
        ref={formRefs.education}
        style={sectionStyle}
      >
        <div style={headerStyle}>
          <h1>Education</h1>
        </div>
        <div style={contentStyle}>
          <EducationForm data={cvData.education} onUpdate={updateEducation} />
        </div>
      </section>

      <section
        id="form-experience"
        ref={formRefs.experience}
        style={sectionStyle}
      >
        <div style={headerStyle}>
          <h1>Experience</h1>
        </div>
        <div style={contentStyle}>
          <ExperienceForm
            data={cvData.experience}
            onUpdate={updateExperience}
          />
        </div>
      </section>

      <section id="form-skills" ref={formRefs.skills} style={sectionStyle}>
        <div style={headerStyle}>
          <h1>Skills</h1>
        </div>
        <div style={contentStyle}>
          <SkillsForm data={cvData.skills} onUpdate={updateSkills} />
        </div>
      </section>
    </div>
  );
};

export default Forms;
