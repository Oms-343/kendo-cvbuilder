import React, { useState } from "react";
import type { LanguagesFormProps } from "../../types";

// CSS objects for cleaner code organization
const formContainerStyle: React.CSSProperties = {
  padding: "20px",
};

const languagesSectionStyle: React.CSSProperties = {
  marginBottom: "32px",
};

const languagesTitleStyle: React.CSSProperties = {
  margin: "0 0 16px 0",
  fontSize: "16px",
  fontWeight: "500",
  color: "#333",
};

const languagesDisplayStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  marginBottom: "16px",
};

const languageTagStyle: React.CSSProperties = {
  background: "#f0f0f0",
  color: "#666",
  padding: "4px 8px 4px 12px",
  borderRadius: "20px",
  fontSize: "14px",
  fontWeight: "500",
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

const removeButtonStyle: React.CSSProperties = {
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
};

const addLanguageContainerStyle: React.CSSProperties = {
  display: "flex",
  gap: "8px",
  alignItems: "center",
};

const languageInputStyle: React.CSSProperties = {
  flex: 1,
  padding: "8px 12px",
  border: "1px solid #e0e0e0",
  borderRadius: "4px",
  fontSize: "14px",
};

const addButtonStyle: React.CSSProperties = {
  padding: "8px 16px",
  backgroundColor: "#666",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px",
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
    <div style={formContainerStyle}>
      {/* Languages Section */}
      <div style={languagesSectionStyle}>
        <h4 style={languagesTitleStyle}>Languages</h4>

        {/* Languages Display */}
        {data.length > 0 && (
          <div style={languagesDisplayStyle}>
            {data.map((language) => (
              <span key={language} style={languageTagStyle}>
                {language}
                <button
                  onClick={() => removeLanguage(language)}
                  style={removeButtonStyle}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Add Language */}
        <div style={addLanguageContainerStyle}>
          <input
            type="text"
            placeholder="Add language (e.g., English, Spanish, French)"
            value={newLanguage}
            onChange={(e) => setNewLanguage(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, addLanguage)}
            style={languageInputStyle}
          />
          <button onClick={addLanguage} style={addButtonStyle}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguagesForm;
