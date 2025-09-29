import React, { useState } from "react";
import { Editor, EditorTools } from "@progress/kendo-react-editor";
import { TextBox } from "@progress/kendo-react-inputs";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { Button } from "@progress/kendo-react-buttons";
import { Checkbox } from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";
import type { ExperienceItem, ExperienceFormProps } from "../../types";

// Styles - All CSS objects organized in one place
const styles = {
  experienceItem: {
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    marginBottom: "16px",
    marginTop: "28px",
    backgroundColor: "#f8f9fa",
    padding: "16px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
  } as React.CSSProperties,

  experienceItemHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  } as React.CSSProperties,

  experienceContent: {
    flex: 1,
  } as React.CSSProperties,

  experienceTitle: {
    margin: "0 0 6px 0",
    fontSize: "18px",
    fontWeight: "600",
    color: "#333",
  } as React.CSSProperties,

  experienceCompany: {
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

  addExperienceSection: {
    borderRadius: "8px",
    backgroundColor: "transparent",
  } as React.CSSProperties,

  addExperienceGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginBottom: "20px",
  } as React.CSSProperties,

  dateRow: {
    display: "flex",
    gap: "20px",
  } as React.CSSProperties,

  dateField: {
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

  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    color: "#333333",
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

  disabledInput: {
    width: "100%",
    padding: "8px 12px",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    fontSize: "14px",
    backgroundColor: "#f5f5f5",
    color: "#999",
    cursor: "not-allowed",
  } as React.CSSProperties,
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
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const formatDateToString = (date: Date | null): string => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const handleAddExperience = () => {
    if (newExperience.position && newExperience.company) {
      const experience: ExperienceItem = {
        id: Date.now().toString(),
        position: newExperience.position || "",
        company: newExperience.company || "",
        location: newExperience.location || "",
        startDate: formatDateToString(startDate),
        endDate: newExperience.current ? "" : formatDateToString(endDate),
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
      setStartDate(null);
      setEndDate(null);
    }
  };

  const handleRemoveExperience = (id: string) => {
    onUpdate(data.filter((exp) => exp.id !== id));
  };

  return (
    <div>
      {/* Add New Experience Form */}
      <div style={styles.addExperienceSection}>
        <div style={styles.addExperienceGrid}>
          {/* Position */}
          <div style={styles.formField}>
            <Label>
              Position <span style={styles.requiredAsterisk}>*</span>
            </Label>
            <TextBox
              placeholder="Software Engineer"
              value={newExperience.position || ""}
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  position: String(e.value || ""),
                })
              }
              style={{ width: "100%" }}
            />
          </div>

          {/* Company */}
          <div style={styles.formField}>
            <Label>
              Company <span style={styles.requiredAsterisk}>*</span>
            </Label>
            <TextBox
              placeholder="Company Name"
              value={newExperience.company || ""}
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  company: String(e.value || ""),
                })
              }
              style={{ width: "100%" }}
            />
          </div>

          {/* Location */}
          <div style={styles.formField}>
            <Label>Location</Label>
            <TextBox
              placeholder="City, State"
              value={newExperience.location || ""}
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  location: String(e.value || ""),
                })
              }
              style={{ width: "100%" }}
            />
          </div>

          {/* Start Date and End Date in flex row */}
          <div style={styles.dateRow}>
            <div style={styles.dateField}>
              <Label>
                Start Date <span style={styles.requiredAsterisk}>*</span>
              </Label>
              <DatePicker
                placeholder="Select start date"
                value={startDate}
                onChange={(e) => setStartDate(e.value)}
                format="MMM yyyy"
                style={{ width: "100%" }}
              />
            </div>
            <div style={styles.dateField}>
              <Label>End Date</Label>
              <DatePicker
                placeholder="Select end date"
                value={endDate}
                onChange={(e) => setEndDate(e.value)}
                format="MMM yyyy"
                disabled={newExperience.current || false}
                style={{ width: "100%" }}
              />
            </div>
          </div>

          {/* Currently working checkbox */}
          <div style={styles.formField}>
            <Checkbox
              label="Currently working here"
              checked={newExperience.current || false}
              onChange={(e) => {
                setNewExperience({
                  ...newExperience,
                  current: e.value,
                  endDate: e.value ? "" : newExperience.endDate,
                });
                if (e.value) {
                  setEndDate(null);
                }
              }}
            />
          </div>

          {/* Description */}
          <div style={styles.formField}>
            <Label>Job Description</Label>
            <Editor
              value={newExperience.description || ""}
              onChange={(event) =>
                setNewExperience({
                  ...newExperience,
                  description: event.html || "",
                })
              }
              tools={[
                [EditorTools.Bold, EditorTools.Italic, EditorTools.Underline],
                [EditorTools.UnorderedList, EditorTools.OrderedList],
                [EditorTools.Link, EditorTools.Unlink],
              ]}
            />
          </div>
        </div>
        <Button
          onClick={handleAddExperience}
          fillMode="solid"
          themeColor="primary"
          size="medium"
        >
          Add Experience
        </Button>
      </div>

      {/* Existing Experience Items */}
      {data.map((experience) => (
        <div key={experience.id} style={styles.experienceItem}>
          <div style={styles.experienceItemHeader}>
            <div style={styles.experienceContent}>
              <h4 style={styles.experienceTitle}>{experience.position}</h4>
              <p style={styles.experienceCompany}>{experience.company}</p>
            </div>
            <Button
              onClick={() => handleRemoveExperience(experience.id)}
              fillMode="flat"
              themeColor="error"
              size="small"
              style={{ minWidth: "32px", width: "32px", height: "32px" }}
            >
              ×
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceForm;
