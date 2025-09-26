import React, { useState } from "react";
import type { SkillsFormProps } from "../../types";

// CSS objects for cleaner code organization
const formContainerStyle: React.CSSProperties = {
  padding: "20px",
};

const skillSectionStyle: React.CSSProperties = {
  marginBottom: "32px",
};

const skillTitleStyle: React.CSSProperties = {
  margin: "0 0 16px 0",
  fontSize: "16px",
  fontWeight: "500",
  color: "#333",
};

const skillsDisplayStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  marginBottom: "16px",
};

const technicalSkillTagStyle: React.CSSProperties = {
  background: "#e3f2fd",
  color: "#1976d2",
  padding: "4px 8px 4px 12px",
  borderRadius: "20px",
  fontSize: "14px",
  fontWeight: "500",
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

const softSkillTagStyle: React.CSSProperties = {
  background: "#f0f0f0",
  color: "#666",
  padding: "4px 8px 4px 12px",
  borderRadius: "20px",
  fontSize: "14px",
  fontWeight: "500",
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

const removeButtonStyle: React.CSSProperties = {
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
};

const softRemoveButtonStyle: React.CSSProperties = {
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
};

const addSkillContainerStyle: React.CSSProperties = {
  display: "flex",
  gap: "8px",
  alignItems: "center",
};

const skillInputStyle: React.CSSProperties = {
  flex: 1,
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
};

const softAddButtonStyle: React.CSSProperties = {
  padding: "8px 16px",
  backgroundColor: "#666",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px",
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
    <div style={formContainerStyle}>
      {/* Technical Skills Section */}
      <div style={skillSectionStyle}>
        <h4 style={skillTitleStyle}>Technical Skills</h4>

        {/* Technical Skills Display */}
        {data.technical.length > 0 && (
          <div style={skillsDisplayStyle}>
            {data.technical.map((skill) => (
              <span key={skill} style={technicalSkillTagStyle}>
                {skill}
                <button
                  onClick={() => removeTechnicalSkill(skill)}
                  style={removeButtonStyle}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Add Technical Skill */}
        <div style={addSkillContainerStyle}>
          <input
            type="text"
            placeholder="Add technical skill (e.g., JavaScript, Python)"
            value={newTechnicalSkill}
            onChange={(e) => setNewTechnicalSkill(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, addTechnicalSkill)}
            style={skillInputStyle}
          />
          <button onClick={addTechnicalSkill} style={addButtonStyle}>
            Add
          </button>
        </div>
      </div>

      {/* Soft Skills Section */}
      <div>
        <h4 style={skillTitleStyle}>Soft Skills</h4>

        {/* Soft Skills Display */}
        {data.soft.length > 0 && (
          <div style={skillsDisplayStyle}>
            {data.soft.map((skill) => (
              <span key={skill} style={softSkillTagStyle}>
                {skill}
                <button
                  onClick={() => removeSoftSkill(skill)}
                  style={softRemoveButtonStyle}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Add Soft Skill */}
        <div style={addSkillContainerStyle}>
          <input
            type="text"
            placeholder="Add soft skill (e.g., Leadership, Communication)"
            value={newSoftSkill}
            onChange={(e) => setNewSoftSkill(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, addSoftSkill)}
            style={skillInputStyle}
          />
          <button onClick={addSoftSkill} style={softAddButtonStyle}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;
