import React from "react";
import type { TemplateSelectorProps } from "../../types";
import { templates } from "../../types";

// Styles - All CSS objects organized in one place
const styles = {
  container: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
  } as React.CSSProperties,

  header: {
    padding: "20px",
    borderBottom: "1px solid #e5e5e5",
    backgroundColor: "#ffffff",
  } as React.CSSProperties,

  headerTitle: {
    margin: "0",
    fontSize: "14px",
    fontWeight: "600",
    color: "#333",
  } as React.CSSProperties,

  headerDescription: {
    margin: "8px 0 0 0",
    fontSize: "12px",
    color: "#666",
  } as React.CSSProperties,

  scrollableArea: {
    flex: 1,
    padding: "20px",
  } as React.CSSProperties,

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "16px",
  } as React.CSSProperties,

  templateCard: (isSelected: boolean): React.CSSProperties => ({
    cursor: "pointer",
    overflow: "hidden",
    borderRadius: "8px",
    border: `2px solid ${isSelected ? "#1976d2" : "#e5e5e5"}`,
    backgroundColor: isSelected ? "#f3f8ff" : "#ffffff",
    transition: "all 0.2s ease",
  }),

  templatePreview: (isSelected: boolean): React.CSSProperties => ({
    position: "relative",
    aspectRatio: "210/297",
    width: "100%",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: isSelected ? 1 : 0.8,
  }),

  templatePlaceholder: {
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
  } as React.CSSProperties,

  templateName: {
    fontWeight: "500",
    marginBottom: "8px",
  } as React.CSSProperties,

  templatePreviewText: {
    fontSize: "10px",
    lineHeight: "1.3",
  } as React.CSSProperties,

  templateInfo: {
    padding: "12px",
    backgroundColor: "#ffffff",
  } as React.CSSProperties,

  templateInfoTitle: {
    margin: "0",
    fontSize: "12px",
    fontWeight: "500",
    color: "#333",
  } as React.CSSProperties,

  comingSoonOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.65)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  } as React.CSSProperties,

  comingSoonBadge: {
    backgroundColor: "#ff9800",
    color: "#ffffff",
    padding: "6px 12px",
    borderRadius: "16px",
    fontSize: "11px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  } as React.CSSProperties,
};

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  setSelectedTemplate,
}) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.headerTitle}>Template</h3>
        <p style={styles.headerDescription}>Choose a design for your resume</p>
      </div>

      <div className="scrollable-area" style={styles.scrollableArea}>
        <div style={styles.grid}>
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() =>
                !template.comingSoon && setSelectedTemplate(template.id)
              }
              style={{
                ...styles.templateCard(selectedTemplate === template.id),
                cursor: template.comingSoon ? "default" : "pointer",
                opacity: template.comingSoon ? 0.95 : 1,
              }}
            >
              <div
                style={{
                  ...styles.templatePreview(selectedTemplate === template.id),
                  position: "relative",
                }}
              >
                {/* Show actual template image if available, placeholder otherwise */}
                {template.image ? (
                  <img
                    src={template.image}
                    alt={`${template.name} template preview`}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                ) : (
                  <div style={styles.templatePlaceholder}>
                    <div>
                      <div style={styles.templateName}>{template.name}</div>
                      <div style={styles.templatePreviewText}>
                        Template Preview
                      </div>
                    </div>
                  </div>
                )}

                {/* Coming Soon Overlay */}
                {template.comingSoon && (
                  <div style={styles.comingSoonOverlay}>
                    <div style={styles.comingSoonBadge}>Coming Soon</div>
                  </div>
                )}
              </div>

              <div style={styles.templateInfo}>
                <h4 style={styles.templateInfoTitle}>
                  {template.name}
                  {template.comingSoon && (
                    <span
                      style={{
                        marginLeft: "8px",
                        fontSize: "10px",
                        color: "#ff9800",
                        fontWeight: "normal",
                      }}
                    >
                      (Coming Soon)
                    </span>
                  )}
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
