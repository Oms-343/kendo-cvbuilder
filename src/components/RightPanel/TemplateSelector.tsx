import React from "react";
import type { TemplateSelectorProps } from "../../types";
import { templates } from "../../types";

// CSS objects for cleaner code organization
const containerStyle: React.CSSProperties = {
  display: "flex",
  height: "100%",
  flexDirection: "column",
};

const headerStyle: React.CSSProperties = {
  padding: "20px",
  borderBottom: "1px solid #e5e5e5",
  backgroundColor: "#ffffff",
};

const headerTitleStyle: React.CSSProperties = {
  margin: "0",
  fontSize: "14px",
  fontWeight: "600",
  color: "#333",
};

const headerDescriptionStyle: React.CSSProperties = {
  margin: "8px 0 0 0",
  fontSize: "12px",
  color: "#666",
};

const scrollableAreaStyle: React.CSSProperties = {
  flex: 1,
  padding: "20px",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "16px",
};

const templateCardStyle = (isSelected: boolean): React.CSSProperties => ({
  cursor: "pointer",
  overflow: "hidden",
  borderRadius: "8px",
  border: `2px solid ${isSelected ? "#1976d2" : "#e5e5e5"}`,
  backgroundColor: isSelected ? "#f3f8ff" : "#ffffff",
  transition: "all 0.2s ease",
});

const templatePreviewStyle = (isSelected: boolean): React.CSSProperties => ({
  position: "relative",
  aspectRatio: "210/297",
  width: "100%",
  backgroundColor: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: isSelected ? 1 : 0.8,
});

const templatePlaceholderStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f5f5f5",
  border: "1px solid #e5e5e5",
  borderRadius: "4px",
  fontSize: "12px",
  color: "#666",
  textAlign: "center",
  padding: "10px",
};

const templateNameStyle: React.CSSProperties = {
  fontWeight: "500",
  marginBottom: "8px",
};

const templatePreviewTextStyle: React.CSSProperties = {
  fontSize: "10px",
  lineHeight: "1.3",
};

const templateInfoStyle: React.CSSProperties = {
  padding: "12px",
  backgroundColor: "#ffffff",
};

const templateInfoTitleStyle: React.CSSProperties = {
  margin: "0",
  fontSize: "12px",
  fontWeight: "500",
  color: "#333",
};

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  setSelectedTemplate,
}) => {
  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h3 style={headerTitleStyle}>Template</h3>
        <p style={headerDescriptionStyle}>Choose a design for your resume</p>
      </div>

      <div className="scrollable-area" style={scrollableAreaStyle}>
        <div style={gridStyle}>
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => setSelectedTemplate(template.id)}
              style={templateCardStyle(selectedTemplate === template.id)}
            >
              <div
                style={templatePreviewStyle(selectedTemplate === template.id)}
              >
                {/* Show actual template image if available, placeholder otherwise */}
                {template.image ? (
                  <img 
                    src={template.image} 
                    alt={`${template.name} template preview`}
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%', 
                      objectFit: 'contain',
                      display: 'block'
                    }}
                  />
                ) : (
                  <div style={templatePlaceholderStyle}>
                    <div>
                      <div style={templateNameStyle}>{template.name}</div>
                      <div style={templatePreviewTextStyle}>Template Preview</div>
                    </div>
                  </div>
                )}
              </div>

              <div style={templateInfoStyle}>
                <h4 style={templateInfoTitleStyle}>{template.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;
