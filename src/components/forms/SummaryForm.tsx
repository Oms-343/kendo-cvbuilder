import React from "react";
import { Editor, EditorTools } from "@progress/kendo-react-editor";
import type { SummaryFormProps } from "../../types";

// CSS objects for cleaner code organization

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "16px",
  fontWeight: "500",
  marginBottom: "8px",
  color: "#333",
};

const tipStyle: React.CSSProperties = {
  fontSize: "12px",
  color: "#666",
  marginTop: "8px",
};

const SummaryForm: React.FC<SummaryFormProps> = ({ data, onUpdate }) => {
  const handleChange = (event: any) => {
    onUpdate({
      content: event.html || "",
    });
  };

  return (
    <div>
      <label style={labelStyle}>Professional Summary</label>
      <Editor
        value={data.content}
        onChange={handleChange}
        tools={[
          [EditorTools.Bold, EditorTools.Italic, EditorTools.Underline],
          [EditorTools.UnorderedList, EditorTools.OrderedList],
          [EditorTools.Link, EditorTools.Unlink],
        ]}
      />
      <div style={tipStyle}>
        Tip: Keep it concise (2-4 sentences) and focus on your most relevant
        qualifications.
      </div>
    </div>
  );
};

export default SummaryForm;
