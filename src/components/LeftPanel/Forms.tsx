import React from "react";
import BasicsForm from "../Forms/BasicsForm";
import SummaryForm from "../Forms/SummaryForm";
import EducationForm from "../Forms/EducationForm";
import ExperienceForm from "../Forms/ExperienceForm";
import SkillsForm from "../Forms/SkillsForm";
import type { FormsProps } from "../../types";

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
  const formSections = [
    { id: "basics", title: "Basics", ref: formRefs.basics },
    { id: "summary", title: "Summary", ref: formRefs.summary },
    { id: "education", title: "Education", ref: formRefs.education },
    { id: "experience", title: "Experience", ref: formRefs.experience },
    { id: "skills", title: "Skills", ref: formRefs.skills },
  ];

  return (
    <div
      ref={formAreaRef}
      className="scrollable-area"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {formSections.map((section) => {
        const renderFormContent = () => {
          switch (section.id) {
            case "basics":
              return (
                <BasicsForm data={cvData.basics} onUpdate={updateBasics} />
              );
            case "summary":
              return (
                <SummaryForm data={cvData.summary} onUpdate={updateSummary} />
              );
            case "education":
              return (
                <EducationForm
                  data={cvData.education}
                  onUpdate={updateEducation}
                />
              );
            case "experience":
              return (
                <ExperienceForm
                  data={cvData.experience}
                  onUpdate={updateExperience}
                />
              );
            case "skills":
              return (
                <SkillsForm data={cvData.skills} onUpdate={updateSkills} />
              );
            default:
              return null;
          }
        };

        return (
          <section
            key={section.id}
            id={`form-${section.id}`}
            ref={section.ref}
            style={{
              borderBottom: "1px solid #f0f0f0",
            }}
          >
            {/* Section Header */}
            <div
              style={{
                backgroundColor: "#f8f9fa",
                padding: "16px 24px",
                borderBottom: "1px solid #e0e0e0",
                position: "sticky",
                top: "0",
                zIndex: "10",
              }}
            >
              <h2
                style={{
                  margin: "0",
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#333333",
                }}
              >
                {section.title}
              </h2>
            </div>

            {/* Form Content */}
            <div
              style={{
                padding: "24px",
                backgroundColor: "#ffffff",
              }}
            >
              {renderFormContent()}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Forms;
