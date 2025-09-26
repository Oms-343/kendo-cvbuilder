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

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  sections,
  activeSection,
  onSectionClick,
}) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "80px",
        backgroundColor: "#fafafa", // bg-zinc-50
        borderRight: "2px solid #e5e5e5", // border-r-2
        fontFamily: "system-ui, -apple-system, sans-serif",
        transition: "width 300ms ease-in-out",
        display: "flex",
        flexDirection: "column",
        padding: "20px 0",
        alignItems: "center",
        gap: "8px",
      }}
    >
      {sections.map((section) => (
        <div
          key={section.id}
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <button
            onClick={() => onSectionClick(section.id)}
            title={section.title}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              border: "1px solid transparent",
              backgroundColor:
                activeSection === section.id ? "#1976d2" : "transparent",
              color: activeSection === section.id ? "white" : "#666",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease",
              padding: "0",
              minWidth: "auto",
              fontSize: "18px",
            }}
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
            <span
              style={{
                fontSize: "18px",
                lineHeight: "1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {iconMap[section.icon] || "📋"}
            </span>
          </button>

          {/* Tooltip */}
          <div
            style={{
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
              zIndex: "1000",
              opacity: "0",
              pointerEvents: "none",
              transition: "opacity 0.2s ease",
            }}
          >
            {section.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarNavigation;
