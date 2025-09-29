import React, { useState } from "react";
import { TextBox } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { Label } from "@progress/kendo-react-labels";
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

  return (
    <div style={styles.formContainer}>
      {/* Technical Skills Section */}
      <div style={styles.skillSection}>
        <Label style={styles.skillTitle}>Technical Skills</Label>

        {/* Technical Skills Display */}
        {data.technical.length > 0 && (
          <div style={styles.skillsDisplay}>
            {data.technical.map((skill) => (
              <span key={skill} style={styles.technicalSkillTag}>
                {skill}
                <Button
                  onClick={() => removeTechnicalSkill(skill)}
                  fillMode="flat"
                  size="small"
                  style={{
                    minWidth: "16px",
                    width: "16px",
                    height: "16px",
                    padding: "0",
                    marginLeft: "8px",
                    fontSize: "12px",
                  }}
                >
                  ×
                </Button>
              </span>
            ))}
          </div>
        )}

        {/* Add Technical Skill */}
        <div style={styles.addSkillContainer}>
          <TextBox
            placeholder="Add technical skill (e.g., JavaScript, Python)"
            value={newTechnicalSkill}
            onChange={(e) => setNewTechnicalSkill(String(e.value || ""))}
            onKeyDown={(e) => e.key === "Enter" && addTechnicalSkill()}
            style={{ flex: 1 }}
          />
          <Button
            onClick={addTechnicalSkill}
            fillMode="solid"
            themeColor="primary"
            size="medium"
          >
            Add
          </Button>
        </div>
      </div>

      {/* Soft Skills Section */}
      <div>
        <Label style={styles.skillTitle}>Soft Skills</Label>

        {/* Soft Skills Display */}
        {data.soft.length > 0 && (
          <div style={styles.skillsDisplay}>
            {data.soft.map((skill) => (
              <span key={skill} style={styles.softSkillTag}>
                {skill}
                <Button
                  onClick={() => removeSoftSkill(skill)}
                  fillMode="flat"
                  size="small"
                  style={{
                    minWidth: "16px",
                    width: "16px",
                    height: "16px",
                    padding: "0",
                    marginLeft: "8px",
                    fontSize: "12px",
                  }}
                >
                  ×
                </Button>
              </span>
            ))}
          </div>
        )}

        {/* Add Soft Skill */}
        <div style={styles.addSkillContainer}>
          <TextBox
            placeholder="Add soft skill (e.g., Leadership, Communication)"
            value={newSoftSkill}
            onChange={(e) => setNewSoftSkill(String(e.value || ""))}
            onKeyDown={(e) => e.key === "Enter" && addSoftSkill()}
            style={{ flex: 1 }}
          />
          <Button
            onClick={addSoftSkill}
            fillMode="solid"
            themeColor="primary"
            size="medium"
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;
