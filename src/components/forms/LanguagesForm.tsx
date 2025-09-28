import React, { useState } from "react";
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

  const handleKeyPress = (e: React.KeyboardEvent, callback: () => void) => {
    if (e.key === "Enter") {
      e.preventDefault();
      callback();
    }
  };

  return (
    <div style={styles.formContainer}>
      {/* Languages Section */}
      <div style={styles.languagesSection}>
        <h4 style={styles.languagesTitle}>Languages</h4>

        {/* Languages Display */}
        {data.length > 0 && (
          <div style={styles.languagesDisplay}>
            {data.map((language) => (
              <span key={language} style={styles.languageTag}>
                {language}
                <button
                  onClick={() => removeLanguage(language)}
                  style={styles.removeButton}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Add Language */}
        <div style={styles.addLanguageContainer}>
          <input
            type="text"
            placeholder="Add language (e.g., English, Spanish, French)"
            value={newLanguage}
            onChange={(e) => setNewLanguage(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, addLanguage)}
            style={styles.languageInput}
          />
          <button onClick={addLanguage} style={styles.addButton}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguagesForm;
