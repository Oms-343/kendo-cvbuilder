import React, { useState } from "react";
import { TextBox } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { Label } from "@progress/kendo-react-labels";
import type { LanguagesFormProps } from "../../types";

// Styles - All CSS objects organized in one place
const styles = {
  formContainer: {
    padding: "20px",
  } as React.CSSProperties,

  languagesSection: {
    marginBottom: "32px",
  } as React.CSSProperties,

  languagesTitle: {
    margin: "0 0 16px 0",
    fontSize: "16px",
    fontWeight: "500",
    color: "#333",
  } as React.CSSProperties,

  languagesDisplay: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "16px",
  } as React.CSSProperties,

  languageTag: {
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

  addLanguageContainer: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
  } as React.CSSProperties,

  languageInput: {
    flex: 1,
    padding: "8px 12px",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    fontSize: "14px",
  } as React.CSSProperties,

  addButton: {
    padding: "8px 16px",
    backgroundColor: "#666",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  } as React.CSSProperties,
};

const LanguagesForm: React.FC<LanguagesFormProps> = ({ data, onUpdate }) => {
  const [newLanguage, setNewLanguage] = useState("");

  const addLanguage = () => {
    if (newLanguage.trim() && !data.includes(newLanguage.trim())) {
      onUpdate([...data, newLanguage.trim()]);
      setNewLanguage("");
    }
  };

  const removeLanguage = (languageToRemove: string) => {
    onUpdate(data.filter((language) => language !== languageToRemove));
  };

  return (
    <div style={styles.formContainer}>
      {/* Languages Section */}
      <div style={styles.languagesSection}>
        <Label style={styles.languagesTitle}>Languages</Label>

        {/* Languages Display */}
        {data.length > 0 && (
          <div style={styles.languagesDisplay}>
            {data.map((language) => (
              <span key={language} style={styles.languageTag}>
                {language}
                <Button
                  onClick={() => removeLanguage(language)}
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

        {/* Add Language */}
        <div style={styles.addLanguageContainer}>
          <TextBox
            placeholder="Add language (e.g., English, Spanish, French)"
            value={newLanguage}
            onChange={(e) => setNewLanguage(String(e.value || ""))}
            onKeyDown={(e) => e.key === "Enter" && addLanguage()}
            style={{ flex: 1 }}
          />
          <Button
            onClick={addLanguage}
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

export default LanguagesForm;
