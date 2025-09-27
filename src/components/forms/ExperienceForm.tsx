import React, { useState } from "react";
import type { ExperienceItem, ExperienceFormProps } from "../../types";

// CSS objects for cleaner code organization

const experienceItemStyle: React.CSSProperties = {
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  marginBottom: "16px",
  marginTop: "28px",
  backgroundColor: "#f8f9fa",
  padding: "16px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
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
  margin: "0 0 6px 0",
  fontSize: "18px",
  fontWeight: "600",
  color: "#333",
};

const experienceCompanyStyle: React.CSSProperties = {
  margin: "0 0 4px 0",
  color: "#555",
  fontSize: "14px",
  fontWeight: "500",
};



const removeButtonStyle: React.CSSProperties = {
  background: "none",
  border: "none",
  color: "#dc3545",
  cursor: "pointer",
  fontSize: "18px",
  padding: "4px",
  borderRadius: "4px",
  transition: "background-color 0.2s ease",
};

const addExperienceSectionStyle: React.CSSProperties = {
  borderRadius: "8px",
  backgroundColor: "transparent",
};

const addExperienceGridStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  marginBottom: "20px",
};

const dateRowStyle: React.CSSProperties = {
  display: "flex",
  gap: "20px",
};

const dateFieldStyle: React.CSSProperties = {
  flex: 1,
};

const formFieldStyle: React.CSSProperties = {
  marginBottom: "0",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "14px",
  fontWeight: "500",
  color: "#333333",
  marginBottom: "8px",
  lineHeight: "1.4",
};

const requiredAsteriskStyle: React.CSSProperties = {
  color: "#d32f2f",
  marginLeft: "2px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "8px 12px",
  border: "1px solid #e0e0e0",
  borderRadius: "4px",
  fontSize: "14px",
};

const checkboxLabelStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "14px",
  color: "#333333",
};

const textareaStyle: React.CSSProperties = {
  width: "100%",
  padding: "8px 12px",
  border: "1px solid #e0e0e0",
  borderRadius: "4px",
  fontSize: "14px",
  fontFamily: "inherit",
  resize: "vertical",
};

const addButtonStyle: React.CSSProperties = {
  padding: "8px 16px",
  backgroundColor: "#1976d2",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "500",
  transition: "background-color 0.2s ease",
};

const disabledInputStyle: React.CSSProperties = {
  width: "100%",
  padding: "8px 12px",
  border: "1px solid #e0e0e0",
  borderRadius: "4px",
  fontSize: "14px",
  backgroundColor: "#f5f5f5",
  color: "#999",
  cursor: "not-allowed",
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
    <div>
      {/* Add New Experience Form */}
      <div style={addExperienceSectionStyle}>
        <div style={addExperienceGridStyle}>
          {/* Position */}
          <div style={formFieldStyle}>
            <label style={labelStyle}>
              Position <span style={requiredAsteriskStyle}>*</span>
            </label>
            <input
              type="text"
              placeholder="Software Engineer"
              value={newExperience.position || ""}
              onChange={(e) =>
                setNewExperience({ ...newExperience, position: e.target.value })
              }
              style={inputStyle}
            />
          </div>

          {/* Company */}
          <div style={formFieldStyle}>
            <label style={labelStyle}>
              Company <span style={requiredAsteriskStyle}>*</span>
            </label>
            <input
              type="text"
              placeholder="Company Name"
              value={newExperience.company || ""}
              onChange={(e) =>
                setNewExperience({ ...newExperience, company: e.target.value })
              }
              style={inputStyle}
            />
          </div>

          {/* Location */}
          <div style={formFieldStyle}>
            <label style={labelStyle}>Location</label>
            <input
              type="text"
              placeholder="City, State"
              value={newExperience.location || ""}
              onChange={(e) =>
                setNewExperience({ ...newExperience, location: e.target.value })
              }
              style={inputStyle}
            />
          </div>

          {/* Start Date and End Date in flex row */}
          <div style={dateRowStyle}>
            <div style={dateFieldStyle}>
              <label style={labelStyle}>
                Start Date <span style={requiredAsteriskStyle}>*</span>
              </label>
              <input
                type="text"
                placeholder="Jan 2020"
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
            <div style={dateFieldStyle}>
              <label style={labelStyle}>End Date</label>
              <input
                type="text"
                placeholder="Dec 2022"
                value={newExperience.endDate || ""}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    endDate: e.target.value,
                  })
                }
                disabled={newExperience.current || false}
                style={newExperience.current ? disabledInputStyle : inputStyle}
              />
            </div>
          </div>

          {/* Currently working checkbox */}
          <div style={formFieldStyle}>
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
          </div>

          {/* Description */}
          <div style={formFieldStyle}>
            <label style={labelStyle}>Job Description</label>
            <textarea
              placeholder="Describe your responsibilities and achievements..."
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
        </div>
        <button onClick={handleAddExperience} style={addButtonStyle}>
          Add Experience
        </button>
      </div>

      {/* Existing Experience Items */}
      {data.map((experience) => (
        <div key={experience.id} style={experienceItemStyle}>
          <div style={experienceItemHeaderStyle}>
            <div style={experienceContentStyle}>
              <h4 style={experienceTitleStyle}>{experience.position}</h4>
              <p style={experienceCompanyStyle}>{experience.company}</p>
            </div>
            <button
              onClick={() => handleRemoveExperience(experience.id)}
              style={removeButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f8d7da";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceForm;
