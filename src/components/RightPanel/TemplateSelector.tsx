import React from "react";
import type { TemplateSelectorProps } from "../../types";
import { templates } from "../../types";

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  setSelectedTemplate,
}) => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "20px",
          borderBottom: "1px solid #e5e5e5",
          backgroundColor: "#ffffff",
        }}
      >
        <h3
          style={{
            margin: "0",
            fontSize: "14px",
            fontWeight: "600",
            color: "#333",
          }}
        >
          Template
        </h3>
        <p
          style={{
            margin: "8px 0 0 0",
            fontSize: "12px",
            color: "#666",
          }}
        >
          Choose a design for your resume
        </p>
      </div>

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "16px",
          }}
        >
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => setSelectedTemplate(template.id)}
              style={{
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: "8px",
                border: `2px solid ${
                  selectedTemplate === template.id ? "#1976d2" : "#e5e5e5"
                }`,
                backgroundColor:
                  selectedTemplate === template.id ? "#f3f8ff" : "#ffffff",
                transition: "all 0.2s ease",
              }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "210/297",
                  width: "100%",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: selectedTemplate === template.id ? 1 : 0.8,
                }}
              >
                {/* Template thumbnail placeholder */}
                <div
                  style={{
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
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontWeight: "500",
                        marginBottom: "8px",
                      }}
                    >
                      {template.name}
                    </div>
                    <div
                      style={{
                        fontSize: "10px",
                        lineHeight: "1.3",
                      }}
                    >
                      Template Preview
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: "12px",
                  backgroundColor: "#ffffff",
                }}
              >
                <h4
                  style={{
                    margin: "0",
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#333",
                  }}
                >
                  {template.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;
