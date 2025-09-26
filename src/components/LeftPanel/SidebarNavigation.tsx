import React from "react";
import type { SidebarNavigationProps } from "../../types";

const iconMap: Record<string, string> = {
  user: "👤",
  "file-text": "📄",
  "graduation-cap": "🎓",
  briefcase: "💼",
  star: "⭐",
  phone: "📞",
  mail: "📧",
  globe: "🌐",
  award: "🏆",
  tool: "🔧",
  heart: "❤️",
  book: "📚",
  code: "💻",
};

// CSS objects for cleaner code organization
const sidebarContainerStyle: React.CSSProperties = {
  height: "100vh",
  width: "80px",
  backgroundColor: "#fafafa",
  borderRight: "2px solid #e5e5e5",
  fontFamily: "system-ui, -apple-system, sans-serif",
  transition: "width 300ms ease-in-out",
  display: "flex",
  flexDirection: "column",
  padding: "20px 5px",
  alignItems: "center",
  gap: "8px",
};

const sectionContainerStyle: React.CSSProperties = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const sectionButtonStyle = (isActive: boolean): React.CSSProperties => ({
  width: "40px",
  height: "40px",
  borderRadius: "8px",
  border: "1px solid transparent",
  backgroundColor: isActive ? "#1976d2" : "transparent",
  color: isActive ? "white" : "#666",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 0.2s ease",
  padding: "0",
  minWidth: "auto",
  fontSize: "18px",
});

const iconStyle: React.CSSProperties = {
  fontSize: "18px",
  lineHeight: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const tooltipStyle: React.CSSProperties = {
  position: "absolute",
  left: "90px",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "#333",
  color: "white",
  padding: "4px 8px",
  borderRadius: "4px",
  fontSize: "12px",
  whiteSpace: "nowrap",
  zIndex: 1000,
  opacity: 0,
  pointerEvents: "none",
  transition: "opacity 0.2s ease",
};

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  sections,
  activeSection,
  onSectionClick,
}) => {
  return (
    <div style={sidebarContainerStyle}>
      {sections.map((section) => (
        <div key={section.id} style={sectionContainerStyle}>
          <button
            onClick={() => onSectionClick(section.id)}
            title={section.title}
            style={sectionButtonStyle(activeSection === section.id)}
            onMouseEnter={(e) => {
              if (activeSection !== section.id) {
                e.currentTarget.style.backgroundColor = "#e3f2fd";
                e.currentTarget.style.color = "#1976d2";
                e.currentTarget.style.borderColor = "#e3f2fd";
              }
            }}
            onMouseLeave={(e) => {
              if (activeSection !== section.id) {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#666";
                e.currentTarget.style.borderColor = "transparent";
              }
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = "2px solid #1976d2";
              e.currentTarget.style.outlineOffset = "2px";
            }}
            onBlur={(e) => {
              e.currentTarget.style.outline = "none";
            }}
          >
            <span style={iconStyle}>{iconMap[section.icon] || "📋"}</span>
          </button>

          {/* Tooltip */}
          <div style={tooltipStyle}>{section.title}</div>
        </div>
      ))}
    </div>
  );
};

export default SidebarNavigation;
