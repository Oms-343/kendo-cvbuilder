import React, { useState } from "react";
import type { SkillsFormProps } from "../../types";

// Styles - All CSS objects organized in one place
const styles = {
  formContainer: {
    padding: "20px",
  } as React.CSSProperties,

  skillSection: {
    marginBottom: "32px",
  } as React.CSSProperties,

  skillTitle: {
    margin: "0 0 16px 0",
    fontSize: "16px",
    fontWeight: "500",
    color: "#333",
  } as React.CSSProperties,

  skillsDisplay: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "16px",
  } as React.CSSProperties,

  technicalSkillTag: {
    background: "#e3f2fd",
    color: "#1976d2",
    padding: "4px 8px 4px 12px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  } as React.CSSProperties,

  softSkillTag: {
    background: "#f0f0f0",
    color: "#666",
    padding: "4px 8px 4px 12px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  } as React.CSSProperties,

  removeButton: {
    background: "none",
    border: "none",
    color: "#1976d2",
    cursor: "pointer",
    fontSize: "16px",
    padding: "0",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as React.CSSProperties,

  softRemoveButton: {
    background: "none",
    border: "none",
    color: "#666",
    cursor: "pointer",
    fontSize: "16px",
    padding: "0",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as React.CSSProperties,

  addSkillContainer: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
  } as React.CSSProperties,

  skillInput: {
    flex: 1,
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
  } as React.CSSProperties,

  softAddButton: {
    padding: "8px 16px",
    backgroundColor: "#666",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  } as React.CSSProperties,
};

const SkillsForm: React.FC<SkillsFormProps> = ({ data, onUpdate }) => {
  const [newTechnicalSkill, setNewTechnicalSkill] = useState("");
  const [newSoftSkill, setNewSoftSkill] = useState("");

  const addTechnicalSkill = () => {
    if (
      newTechnicalSkill.trim() &&
      !data.technical.includes(newTechnicalSkill.trim())
    ) {
      onUpdate({
        technical: [...data.technical, newTechnicalSkill.trim()],
      });
      setNewTechnicalSkill("");
    }
  };

  const addSoftSkill = () => {
    if (newSoftSkill.trim() && !data.soft.includes(newSoftSkill.trim())) {
      onUpdate({
        soft: [...data.soft, newSoftSkill.trim()],
      });
      setNewSoftSkill("");
    }
  };

  const removeTechnicalSkill = (skillToRemove: string) => {
    onUpdate({
      technical: data.technical.filter((skill) => skill !== skillToRemove),
    });
  };

  const removeSoftSkill = (skillToRemove: string) => {
    onUpdate({
      soft: data.soft.filter((skill) => skill !== skillToRemove),
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent, callback: () => void) => {
    if (e.key === "Enter") {
      e.preventDefault();
      callback();
    }
  };

  return (
    <div style={styles.formContainer}>
      {/* Technical Skills Section */}
      <div style={styles.skillSection}>
        <h4 style={styles.skillTitle}>Technical Skills</h4>

        {/* Technical Skills Display */}
        {data.technical.length > 0 && (
          <div style={styles.skillsDisplay}>
            {data.technical.map((skill) => (
              <span key={skill} style={styles.technicalSkillTag}>
                {skill}
                <button
                  onClick={() => removeTechnicalSkill(skill)}
                  style={styles.removeButton}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Add Technical Skill */}
        <div style={styles.addSkillContainer}>
          <input
            type="text"
            placeholder="Add technical skill (e.g., JavaScript, Python)"
            value={newTechnicalSkill}
            onChange={(e) => setNewTechnicalSkill(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, addTechnicalSkill)}
            style={styles.skillInput}
          />
          <button onClick={addTechnicalSkill} style={styles.addButton}>
            Add
          </button>
        </div>
      </div>

      {/* Soft Skills Section */}
      <div>
        <h4 style={styles.skillTitle}>Soft Skills</h4>

        {/* Soft Skills Display */}
        {data.soft.length > 0 && (
          <div style={styles.skillsDisplay}>
            {data.soft.map((skill) => (
              <span key={skill} style={styles.softSkillTag}>
                {skill}
                <button
                  onClick={() => removeSoftSkill(skill)}
                  style={styles.softRemoveButton}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Add Soft Skill */}
        <div style={styles.addSkillContainer}>
          <input
            type="text"
            placeholder="Add soft skill (e.g., Leadership, Communication)"
            value={newSoftSkill}
            onChange={(e) => setNewSoftSkill(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, addSoftSkill)}
            style={styles.skillInput}
          />
          <button onClick={addSoftSkill} style={styles.softAddButton}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;
