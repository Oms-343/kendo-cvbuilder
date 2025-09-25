import React, { useState } from "react";
import type { ExperienceItem } from "../CvBuilder";

interface ExperienceFormProps {
  data: ExperienceItem[];
  onUpdate: (experience: ExperienceItem[]) => void;
}

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
    <div style={{ padding: "20px" }}>
      {/* Existing Experience Items */}
      {data.map((experience) => (
        <div
          key={experience.id}
          style={{
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
            padding: "16px",
            marginBottom: "16px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div style={{ flex: 1 }}>
              <h4
                style={{
                  margin: "0 0 8px 0",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                {experience.position}
              </h4>
              <p style={{ margin: "0 0 4px 0", color: "#666" }}>
                {experience.company}{" "}
                {experience.location && `• ${experience.location}`}
              </p>
              <p
                style={{ margin: "0 0 8px 0", color: "#666", fontSize: "14px" }}
              >
                {experience.startDate} -{" "}
                {experience.current ? "Present" : experience.endDate}
              </p>
              {experience.description && (
                <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.5" }}>
                  {experience.description}
                </p>
              )}
            </div>
            <button
              onClick={() => handleRemoveExperience(experience.id)}
              style={{
                background: "none",
                border: "none",
                color: "#e74c3c",
                cursor: "pointer",
                fontSize: "18px",
                marginLeft: "16px",
              }}
            >
              ×
            </button>
          </div>
        </div>
      ))}

      {/* Add New Experience Form */}
      <div
        style={{
          border: "2px dashed #e0e0e0",
          borderRadius: "4px",
          padding: "20px",
          backgroundColor: "#fafafa",
        }}
      >
        <h4
          style={{ margin: "0 0 16px 0", fontSize: "16px", fontWeight: "500" }}
        >
          Add Experience
        </h4>
        <div style={{ display: "grid", gap: "16px" }}>
          <div
            style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <input
              type="text"
              placeholder="Position"
              value={newExperience.position || ""}
              onChange={(e) =>
                setNewExperience({ ...newExperience, position: e.target.value })
              }
              style={{
                padding: "8px 12px",
                border: "1px solid #e0e0e0",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            />
            <input
              type="text"
              placeholder="Company"
              value={newExperience.company || ""}
              onChange={(e) =>
                setNewExperience({ ...newExperience, company: e.target.value })
              }
              style={{
                padding: "8px 12px",
                border: "1px solid #e0e0e0",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            />
            <input
              type="text"
              placeholder="Location (optional)"
              value={newExperience.location || ""}
              onChange={(e) =>
                setNewExperience({ ...newExperience, location: e.target.value })
              }
              style={{
                padding: "8px 12px",
                border: "1px solid #e0e0e0",
                borderRadius: "4px",
                fontSize: "14px",
              }}
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
              style={{
                padding: "8px 12px",
                border: "1px solid #e0e0e0",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
              }}
            >
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
                style={{
                  padding: "8px 12px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "4px",
                  fontSize: "14px",
                  flex: 1,
                }}
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
            style={{
              padding: "8px 12px",
              border: "1px solid #e0e0e0",
              borderRadius: "4px",
              fontSize: "14px",
              fontFamily: "inherit",
              resize: "vertical",
            }}
          />
        </div>

        <button
          onClick={handleAddExperience}
          style={{
            marginTop: "16px",
            padding: "8px 16px",
            backgroundColor: "#1976d2",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Add Experience
        </button>
      </div>
    </div>
  );
};

export default ExperienceForm;
