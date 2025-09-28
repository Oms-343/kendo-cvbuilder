import React from "react";
import { Editor, EditorTools } from "@progress/kendo-react-editor";
import type { SummaryFormProps } from "../../types";

// Styles - All CSS objects organized in one place
const styles = {
  label: {
    display: "block",
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "8px",
    color: "#333",
  } as React.CSSProperties,

  tip: {
    fontSize: "12px",
    color: "#666",
    marginTop: "8px",
  } as React.CSSProperties,
};

const SummaryForm: React.FC<SummaryFormProps> = ({ data, onUpdate }) => {
  const handleChange = (event: any) => {
    onUpdate({
      content: event.html || "",
    });
  };

  return (
    <div>
      <label style={styles.label}>Professional Summary</label>
      <Editor
        value={data.content}
        onChange={handleChange}
        tools={[
          [EditorTools.Bold, EditorTools.Italic, EditorTools.Underline],
          [EditorTools.UnorderedList, EditorTools.OrderedList],
          [EditorTools.Link, EditorTools.Unlink],
        ]}
      />
      <div style={styles.tip}>
        Tip: Keep it concise (2-4 sentences) and focus on your most relevant
        qualifications.
      </div>
    </div>
  );
};

export default SummaryForm;
