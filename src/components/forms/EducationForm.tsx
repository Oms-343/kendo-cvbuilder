import React, { useState } from "react";
import type { EducationItem, EducationFormProps } from "../../types";

// Styles - All CSS objects organized in one place
const styles = {
  educationItem: {
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    marginBottom: "16px",
    marginTop: "28px",
    backgroundColor: "#f8f9fa",
    padding: "16px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
  } as React.CSSProperties,

  educationItemHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  } as React.CSSProperties,

  educationContent: {
    flex: 1,
  } as React.CSSProperties,

  educationTitle: {
    margin: "0 0 6px 0",
    fontSize: "18px",
    fontWeight: "600",
    color: "#333",
  } as React.CSSProperties,

  educationInstitution: {
    margin: "0 0 4px 0",
    color: "#555",
    fontSize: "14px",
    fontWeight: "500",
  } as React.CSSProperties,

  removeButton: {
    background: "none",
    border: "none",
    color: "#dc3545",
    cursor: "pointer",
    fontSize: "18px",
    padding: "4px",
    borderRadius: "4px",
    transition: "background-color 0.2s ease",
  } as React.CSSProperties,

  addEducationSection: {
    borderRadius: "8px",
    backgroundColor: "transparent",
  } as React.CSSProperties,

  addEducationGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginBottom: "20px",
  } as React.CSSProperties,

  graduationRow: {
    display: "flex",
    gap: "20px",
  } as React.CSSProperties,

  graduationField: {
    flex: 1,
  } as React.CSSProperties,

  formField: {
    marginBottom: "0",
  } as React.CSSProperties,

  label: {
    display: "block",
    fontSize: "14px",
    fontWeight: "500",
    color: "#333333",
    marginBottom: "8px",
    lineHeight: "1.4",
  } as React.CSSProperties,

  requiredAsterisk: {
    color: "#d32f2f",
    marginLeft: "2px",
  } as React.CSSProperties,

  input: {
    width: "100%",
    padding: "8px 12px",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    fontSize: "14px",
  } as React.CSSProperties,

  addButton: {
    padding: "8px 16px",
    backgroundColor: "#1976d2",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    transition: "background-color 0.2s ease",
  } as React.CSSProperties,
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
      <div style={styles.addEducationSection}>
        <div style={styles.addEducationGrid}>
          {/* School/University */}
          <div style={styles.formField}>
            <label style={styles.label}>
              School/University <span style={styles.requiredAsterisk}>*</span>
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
              style={styles.input}
            />
          </div>

          {/* Location */}
          <div style={styles.formField}>
            <label style={styles.label}>Location</label>
            <input
              type="text"
              placeholder="City, State"
              value={newEducation.location || ""}
              onChange={(e) =>
                setNewEducation({ ...newEducation, location: e.target.value })
              }
              style={styles.input}
            />
          </div>

          {/* Degree */}
          <div style={styles.formField}>
            <label style={styles.label}>
              Degree <span style={styles.requiredAsterisk}>*</span>
            </label>
            <input
              type="text"
              placeholder="Bachelor of Science"
              value={newEducation.course || ""}
              onChange={(e) =>
                setNewEducation({ ...newEducation, course: e.target.value })
              }
              style={styles.input}
            />
          </div>

          {/* Graduation Year and GPA/Score in flex row */}
          <div style={styles.graduationRow}>
            <div style={styles.graduationField}>
              <label style={styles.label}>
                Graduation Year <span style={styles.requiredAsterisk}>*</span>
              </label>
              <input
                type="text"
                placeholder="2020"
                value={newEducation.year || ""}
                onChange={(e) =>
                  setNewEducation({ ...newEducation, year: e.target.value })
                }
                style={styles.input}
              />
            </div>
            <div style={styles.graduationField}>
              <label style={styles.label}>GPA/Score</label>
              <input
                type="text"
                placeholder="score in GPA or %"
                value={newEducation.score || ""}
                onChange={(e) =>
                  setNewEducation({ ...newEducation, score: e.target.value })
                }
                style={styles.input}
              />
            </div>
          </div>
        </div>
        <button onClick={handleAddEducation} style={styles.addButton}>
          Add Education
        </button>
      </div>
      {/* Existing Education Items */}
      {data.map((education) => (
        <div key={education.id} style={styles.educationItem}>
          <div style={styles.educationItemHeader}>
            <div style={styles.educationContent}>
              <h4 style={styles.educationTitle}>{education.course}</h4>
              <p style={styles.educationInstitution}>{education.institution}</p>
            </div>
            <button
              onClick={() => handleRemoveEducation(education.id)}
              style={styles.removeButton}
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
