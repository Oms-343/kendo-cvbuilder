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
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
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
            <div
              key={section.id}
              id={`form-${section.id}`}
              ref={section.ref}
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
                {renderFormContent()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forms;
