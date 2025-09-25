import React from "react";
import type { SummaryData } from "../CvBuilder";

interface SummaryFormProps {
  data: SummaryData;
  onUpdate: (data: Partial<SummaryData>) => void;
}

const SummaryForm: React.FC<SummaryFormProps> = ({ data, onUpdate }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onUpdate({
      content: event.target.value,
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <label
        style={{
          display: "block",
          fontSize: "16px",
          fontWeight: "500",
          marginBottom: "8px",
          color: "#333",
        }}
      >
        Professional Summary
      </label>
      <textarea
        value={data.content}
        onChange={handleChange}
        placeholder="Write a brief professional summary highlighting your key achievements, skills, and career objectives..."
        rows={6}
        style={{
          width: "100%",
          padding: "12px",
          border: "1px solid #e0e0e0",
          borderRadius: "4px",
          fontSize: "14px",
          fontFamily: "inherit",
          resize: "vertical",
          boxSizing: "border-box",
          lineHeight: "1.5",
        }}
      />
      <div
        style={{
          fontSize: "12px",
          color: "#666",
          marginTop: "8px",
        }}
      >
        Tip: Keep it concise (2-4 sentences) and focus on your most relevant
        qualifications.
      </div>
    </div>
  );
};

export default SummaryForm;
