import React, { useState } from "react";
import type { EducationItem, EducationFormProps } from "../../types";

// CSS objects for cleaner code organization

const educationItemStyle: React.CSSProperties = {
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  marginBottom: "16px",
  marginTop: "28px",
  backgroundColor: "#f8f9fa",
  padding: "16px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
};

const educationItemHeaderStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
};

const educationContentStyle: React.CSSProperties = {
  flex: 1,
};

const educationTitleStyle: React.CSSProperties = {
  margin: "0 0 6px 0",
  fontSize: "18px",
  fontWeight: "600",
  color: "#333",
};

const educationInstitutionStyle: React.CSSProperties = {
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

const addEducationSectionStyle: React.CSSProperties = {
  borderRadius: "8px",
  backgroundColor: "transparent",
};

const addEducationGridStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  marginBottom: "20px",
};

const graduationRowStyle: React.CSSProperties = {
  display: "flex",
  gap: "20px",
};

const graduationFieldStyle: React.CSSProperties = {
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

const EducationForm: React.FC<EducationFormProps> = ({ data, onUpdate }) => {
  const [newEducation, setNewEducation] = useState<Partial<EducationItem>>({
    course: "",
    institution: "",
    location: "",
    year: "",
    score: "",
  });

  const handleAddEducation = () => {
    if (newEducation.course && newEducation.institution) {
      const education: EducationItem = {
        id: Date.now().toString(),
        course: newEducation.course || "",
        institution: newEducation.institution || "",
        location: newEducation.location || "",
        year: newEducation.year || "",
        score: newEducation.score || "",
      };
      onUpdate([...data, education]);
      setNewEducation({
        course: "",
        institution: "",
        location: "",
        year: "",
        score: "",
      });
    }
  };

  const handleRemoveEducation = (id: string) => {
    onUpdate(data.filter((edu) => edu.id !== id));
  };

  return (
    <div>
      {/* Add New Education Form */}
      <div style={addEducationSectionStyle}>
        <div style={addEducationGridStyle}>
          {/* School/University */}
          <div style={formFieldStyle}>
            <label style={labelStyle}>
              School/University <span style={requiredAsteriskStyle}>*</span>
            </label>
            <input
              type="text"
              placeholder="School/University Name"
              value={newEducation.institution || ""}
              onChange={(e) =>
                setNewEducation({
                  ...newEducation,
                  institution: e.target.value,
                })
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
              value={newEducation.location || ""}
              onChange={(e) =>
                setNewEducation({ ...newEducation, location: e.target.value })
              }
              style={inputStyle}
            />
          </div>

          {/* Degree */}
          <div style={formFieldStyle}>
            <label style={labelStyle}>
              Degree <span style={requiredAsteriskStyle}>*</span>
            </label>
            <input
              type="text"
              placeholder="Bachelor of Science"
              value={newEducation.course || ""}
              onChange={(e) =>
                setNewEducation({ ...newEducation, course: e.target.value })
              }
              style={inputStyle}
            />
          </div>

          {/* Graduation Year and GPA/Score in flex row */}
          <div style={graduationRowStyle}>
            <div style={graduationFieldStyle}>
              <label style={labelStyle}>
                Graduation Year <span style={requiredAsteriskStyle}>*</span>
              </label>
              <input
                type="text"
                placeholder="2020"
                value={newEducation.year || ""}
                onChange={(e) =>
                  setNewEducation({ ...newEducation, year: e.target.value })
                }
                style={inputStyle}
              />
            </div>
            <div style={graduationFieldStyle}>
              <label style={labelStyle}>GPA/Score</label>
              <input
                type="text"
                placeholder="score in GPA or %"
                value={newEducation.score || ""}
                onChange={(e) =>
                  setNewEducation({ ...newEducation, score: e.target.value })
                }
                style={inputStyle}
              />
            </div>
          </div>
        </div>
        <button onClick={handleAddEducation} style={addButtonStyle}>
          Add Education
        </button>
      </div>
      {/* Existing Education Items */}
      {data.map((education) => (
        <div key={education.id} style={educationItemStyle}>
          <div style={educationItemHeaderStyle}>
            <div style={educationContentStyle}>
              <h4 style={educationTitleStyle}>{education.course}</h4>
              <p style={educationInstitutionStyle}>{education.institution}</p>
            </div>
            <button
              onClick={() => handleRemoveEducation(education.id)}
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

export default EducationForm;
