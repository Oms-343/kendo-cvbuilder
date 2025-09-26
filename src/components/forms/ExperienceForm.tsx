import React, { useState } from "react";
import type { ExperienceItem, ExperienceFormProps } from "../../types";

// CSS objects for cleaner code organization
const formContainerStyle: React.CSSProperties = {
  padding: "20px",
};

const experienceItemStyle: React.CSSProperties = {
  border: "1px solid #e0e0e0",
  borderRadius: "4px",
  padding: "16px",
  marginBottom: "16px",
  backgroundColor: "#f9f9f9",
};

const experienceItemHeaderStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
};

const experienceContentStyle: React.CSSProperties = {
  flex: 1,
};

const experienceTitleStyle: React.CSSProperties = {
  margin: "0 0 8px 0",
  fontSize: "16px",
  fontWeight: "500",
};

const experienceCompanyStyle: React.CSSProperties = {
  margin: "0 0 4px 0",
  color: "#666",
};

const experienceDateStyle: React.CSSProperties = {
  margin: "0 0 8px 0",
  color: "#666",
  fontSize: "14px",
};

const experienceDescriptionStyle: React.CSSProperties = {
  margin: "0",
  fontSize: "14px",
  lineHeight: "1.5",
};

const removeButtonStyle: React.CSSProperties = {
  background: "none",
  border: "none",
  color: "#e74c3c",
  cursor: "pointer",
  fontSize: "18px",
  marginLeft: "16px",
};

const addExperienceSectionStyle: React.CSSProperties = {
  border: "2px dashed #e0e0e0",
  borderRadius: "4px",
  padding: "20px",
  backgroundColor: "#fafafa",
};

const addExperienceTitleStyle: React.CSSProperties = {
  margin: "0 0 16px 0",
  fontSize: "16px",
  fontWeight: "500",
};

const addExperienceGridStyle: React.CSSProperties = {
  display: "grid",
  gap: "16px",
};

const addExperienceRowStyle: React.CSSProperties = {
  display: "grid",
  gap: "16px",
  gridTemplateColumns: "1fr 1fr",
};

const inputStyle: React.CSSProperties = {
  padding: "8px 12px",
  border: "1px solid #e0e0e0",
  borderRadius: "4px",
  fontSize: "14px",
};

const checkboxContainerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const checkboxLabelStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "14px",
};

const endDateInputStyle: React.CSSProperties = {
  padding: "8px 12px",
  border: "1px solid #e0e0e0",
  borderRadius: "4px",
  fontSize: "14px",
  flex: 1,
};

const textareaStyle: React.CSSProperties = {
  padding: "8px 12px",
  border: "1px solid #e0e0e0",
  borderRadius: "4px",
  fontSize: "14px",
  fontFamily: "inherit",
  resize: "vertical",
};

const addButtonStyle: React.CSSProperties = {
  marginTop: "16px",
  padding: "8px 16px",
  backgroundColor: "#1976d2",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px",
};

const ExperienceForm: React.FC<ExperienceFormProps> = ({ data, onUpdate }) => {
  const [newExperience, setNewExperience] = useState<Partial<ExperienceItem>>({
    position: "",
    company: "",
    location: "",
    startDate: "",
    endDate: "",
    current: false,
    description: "",
  });

  const handleAddExperience = () => {
    if (newExperience.position && newExperience.company) {
      const experience: ExperienceItem = {
        id: Date.now().toString(),
        position: newExperience.position || "",
        company: newExperience.company || "",
        location: newExperience.location || "",
        startDate: newExperience.startDate || "",
        endDate: newExperience.current ? "" : newExperience.endDate || "",
        current: newExperience.current || false,
        description: newExperience.description || "",
      };
      onUpdate([...data, experience]);
      setNewExperience({
        position: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
      });
    }
  };

  const handleRemoveExperience = (id: string) => {
    onUpdate(data.filter((exp) => exp.id !== id));
  };

  return (
    <div style={formContainerStyle}>
      {/* Existing Experience Items */}
      {data.map((experience) => (
        <div key={experience.id} style={experienceItemStyle}>
          <div style={experienceItemHeaderStyle}>
            <div style={experienceContentStyle}>
              <h4 style={experienceTitleStyle}>{experience.position}</h4>
              <p style={experienceCompanyStyle}>
                {experience.company}{" "}
                {experience.location && `• ${experience.location}`}
              </p>
              <p style={experienceDateStyle}>
                {experience.startDate} -{" "}
                {experience.current ? "Present" : experience.endDate}
              </p>
              {experience.description && (
                <p style={experienceDescriptionStyle}>
                  {experience.description}
                </p>
              )}
            </div>
            <button
              onClick={() => handleRemoveExperience(experience.id)}
              style={removeButtonStyle}
            >
              ×
            </button>
          </div>
        </div>
      ))}

      {/* Add New Experience Form */}
      <div style={addExperienceSectionStyle}>
        <h4 style={addExperienceTitleStyle}>Add Experience</h4>
        <div style={addExperienceGridStyle}>
          <div style={addExperienceRowStyle}>
            <input
              type="text"
              placeholder="Position"
              value={newExperience.position || ""}
              onChange={(e) =>
                setNewExperience({ ...newExperience, position: e.target.value })
              }
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Company"
              value={newExperience.company || ""}
              onChange={(e) =>
                setNewExperience({ ...newExperience, company: e.target.value })
              }
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Location (optional)"
              value={newExperience.location || ""}
              onChange={(e) =>
                setNewExperience({ ...newExperience, location: e.target.value })
              }
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Start Date"
              value={newExperience.startDate || ""}
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  startDate: e.target.value,
                })
              }
              style={inputStyle}
            />
          </div>

          <div style={checkboxContainerStyle}>
            <label style={checkboxLabelStyle}>
              <input
                type="checkbox"
                checked={newExperience.current || false}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    current: e.target.checked,
                    endDate: e.target.checked ? "" : newExperience.endDate,
                  })
                }
              />
              Currently working here
            </label>
            {!newExperience.current && (
              <input
                type="text"
                placeholder="End Date"
                value={newExperience.endDate || ""}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    endDate: e.target.value,
                  })
                }
                style={endDateInputStyle}
              />
            )}
          </div>

          <textarea
            placeholder="Job description (optional)"
            value={newExperience.description || ""}
            onChange={(e) =>
              setNewExperience({
                ...newExperience,
                description: e.target.value,
              })
            }
            rows={4}
            style={textareaStyle}
          />
        </div>

        <button onClick={handleAddExperience} style={addButtonStyle}>
          Add Experience
        </button>
      </div>
    </div>
  );
};

export default ExperienceForm;
