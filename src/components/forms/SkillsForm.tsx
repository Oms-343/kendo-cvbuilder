import React, { useState } from "react";
import type { SkillsData } from "../CvBuilder";

interface SkillsFormProps {
  data: SkillsData;
  onUpdate: (data: Partial<SkillsData>) => void;
}

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
    <div style={{ padding: "20px" }}>
      {/* Technical Skills Section */}
      <div style={{ marginBottom: "32px" }}>
        <h4
          style={{
            margin: "0 0 16px 0",
            fontSize: "16px",
            fontWeight: "500",
            color: "#333",
          }}
        >
          Technical Skills
        </h4>

        {/* Technical Skills Display */}
        {data.technical.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            {data.technical.map((skill) => (
              <span
                key={skill}
                style={{
                  background: "#e3f2fd",
                  color: "#1976d2",
                  padding: "4px 8px 4px 12px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {skill}
                <button
                  onClick={() => removeTechnicalSkill(skill)}
                  style={{
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
                  }}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Add Technical Skill */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Add technical skill (e.g., JavaScript, Python)"
            value={newTechnicalSkill}
            onChange={(e) => setNewTechnicalSkill(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, addTechnicalSkill)}
            style={{
              flex: 1,
              padding: "8px 12px",
              border: "1px solid #e0e0e0",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          />
          <button
            onClick={addTechnicalSkill}
            style={{
              padding: "8px 16px",
              backgroundColor: "#1976d2",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Add
          </button>
        </div>
      </div>

      {/* Soft Skills Section */}
      <div>
        <h4
          style={{
            margin: "0 0 16px 0",
            fontSize: "16px",
            fontWeight: "500",
            color: "#333",
          }}
        >
          Soft Skills
        </h4>

        {/* Soft Skills Display */}
        {data.soft.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            {data.soft.map((skill) => (
              <span
                key={skill}
                style={{
                  background: "#f0f0f0",
                  color: "#666",
                  padding: "4px 8px 4px 12px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {skill}
                <button
                  onClick={() => removeSoftSkill(skill)}
                  style={{
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
                  }}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Add Soft Skill */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Add soft skill (e.g., Leadership, Communication)"
            value={newSoftSkill}
            onChange={(e) => setNewSoftSkill(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, addSoftSkill)}
            style={{
              flex: 1,
              padding: "8px 12px",
              border: "1px solid #e0e0e0",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          />
          <button
            onClick={addSoftSkill}
            style={{
              padding: "8px 16px",
              backgroundColor: "#666",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;
