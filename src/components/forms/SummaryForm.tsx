import React, { useState } from "react";
import { TextArea } from "@progress/kendo-react-inputs";

const SummaryForm: React.FC = () => {
  const [summary, setSummary] = useState("");

  const handleSummaryChange = (event: any) => {
    setSummary(event.target.value);
  };

  return (
    <div className="summary-form">
      <div className="form-row">
        <label className="form-label">Professional Summary</label>
        <TextArea
          value={summary}
          onChange={handleSummaryChange}
          placeholder="A motivated and highly detail-oriented Business Data Analyst with 5+ years of experience in data analysis, process optimization and data visualization..."
          rows={6}
        />
        <div className="form-hint">
          Write a brief summary that highlights your key strengths and career
          objectives.
        </div>
      </div>
    </div>
  );
};

export default SummaryForm;
