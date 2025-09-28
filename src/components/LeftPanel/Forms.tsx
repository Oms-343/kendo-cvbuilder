import React from "react";
import BasicsForm from "../Forms/BasicsForm";
import SummaryForm from "../Forms/SummaryForm";
import EducationForm from "../Forms/EducationForm";
import ExperienceForm from "../Forms/ExperienceForm";
import SkillsForm from "../Forms/SkillsForm";
import LanguagesForm from "../Forms/LanguagesForm";
import type { FormsProps } from "../../types";

// Styles - All CSS objects organized in one place
const styles = {
  section: {
    borderBottom: "1px solid #f0f0f0",
  } as React.CSSProperties,

  header: {
    backgroundColor: "#f8f9fa",
    padding: "16px 24px",
    borderBottom: "1px solid #e0e0e0",
    position: "sticky",
    top: "0",
    zIndex: "10",
  } as React.CSSProperties,

  content: {
    padding: "24px",
    paddingBottom: "40px",
    backgroundColor: "#ffffff",
  } as React.CSSProperties,
};

const Forms: React.FC<FormsProps> = ({
  cvData,
  updateBasics,
  updateSummary,
  updateEducation,
  updateExperience,
  updateSkills,
  updateLanguages,
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
      <section id="form-basics" ref={formRefs.basics} style={styles.section}>
        <div style={styles.header}>
          <h1>Basics</h1>
        </div>
        <div style={styles.content}>
          <BasicsForm data={cvData.basics} onUpdate={updateBasics} />
        </div>
      </section>

      <section id="form-summary" ref={formRefs.summary} style={styles.section}>
        <div style={styles.header}>
          <h1>Summary</h1>
        </div>
        <div style={styles.content}>
          <SummaryForm data={cvData.summary} onUpdate={updateSummary} />
        </div>
      </section>

      <section
        id="form-education"
        ref={formRefs.education}
        style={styles.section}
      >
        <div style={styles.header}>
          <h1>Education</h1>
        </div>
        <div style={styles.content}>
          <EducationForm data={cvData.education} onUpdate={updateEducation} />
        </div>
      </section>

      <section
        id="form-experience"
        ref={formRefs.experience}
        style={styles.section}
      >
        <div style={styles.header}>
          <h1>Experience</h1>
        </div>
        <div style={styles.content}>
          <ExperienceForm
            data={cvData.experience}
            onUpdate={updateExperience}
          />
        </div>
      </section>

      <section id="form-skills" ref={formRefs.skills} style={styles.section}>
        <div style={styles.header}>
          <h1>Skills</h1>
        </div>
        <div style={styles.content}>
          <SkillsForm data={cvData.skills} onUpdate={updateSkills} />
        </div>
      </section>

      <section
        id="form-languages"
        ref={formRefs.languages}
        style={styles.section}
      >
        <div style={styles.header}>
          <h1>Languages</h1>
        </div>
        <div style={styles.content}>
          <LanguagesForm data={cvData.languages} onUpdate={updateLanguages} />
        </div>
      </section>
    </div>
  );
};

export default Forms;
