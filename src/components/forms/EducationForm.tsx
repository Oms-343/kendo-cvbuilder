import React, { useState } from "react";
import type { EducationItem } from "../CvBuilder";

interface EducationFormProps {
  data: EducationItem[];
  onUpdate: (education: EducationItem[]) => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ data, onUpdate }) => {
  const [newEducation, setNewEducation] = useState<Partial<EducationItem>>({
    course: "",
    institution: "",
    year: "",
    score: "",
  });

  const handleAddEducation = () => {
    if (newEducation.course && newEducation.institution) {
      const education: EducationItem = {
        id: Date.now().toString(),
        course: newEducation.course || "",
        institution: newEducation.institution || "",
        year: newEducation.year || "",
        score: newEducation.score || "",
      };
      onUpdate([...data, education]);
      setNewEducation({ course: "", institution: "", year: "", score: "" });
    }
  };

  const handleRemoveEducation = (id: string) => {
    onUpdate(data.filter((edu) => edu.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Existing Education Items */}
      {data.map((education) => (
        <div
          key={education.id}
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
            <div>
              <h4
                style={{
                  margin: "0 0 8px 0",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                {education.course}
              </h4>
              <p style={{ margin: "0 0 4px 0", color: "#666" }}>
                {education.institution}
              </p>
              <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>
                {education.year} {education.score && `• ${education.score}`}
              </p>
            </div>
            <button
              onClick={() => handleRemoveEducation(education.id)}
              style={{
                background: "none",
                border: "none",
                color: "#e74c3c",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ×
            </button>
          </div>
        </div>
      ))}

      {/* Add New Education Form */}
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
          Add Education
        </h4>
        <div
          style={{
            display: "grid",
            gap: "16px",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <input
            type="text"
            placeholder="Course/Degree"
            value={newEducation.course || ""}
            onChange={(e) =>
              setNewEducation({ ...newEducation, course: e.target.value })
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
            placeholder="Institution"
            value={newEducation.institution || ""}
            onChange={(e) =>
              setNewEducation({ ...newEducation, institution: e.target.value })
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
            placeholder="Year"
            value={newEducation.year || ""}
            onChange={(e) =>
              setNewEducation({ ...newEducation, year: e.target.value })
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
            placeholder="Grade/Score (optional)"
            value={newEducation.score || ""}
            onChange={(e) =>
              setNewEducation({ ...newEducation, score: e.target.value })
            }
            style={{
              padding: "8px 12px",
              border: "1px solid #e0e0e0",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          />
        </div>
        <button
          onClick={handleAddEducation}
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
          Add Education
        </button>
      </div>
    </div>
  );
};

export default EducationForm;
