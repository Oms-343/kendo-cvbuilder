import React from "react";

interface FormSection {
  id: string;
  title: string;
  icon: string;
  component: React.ComponentType;
}

interface SidebarNavigationProps {
  sections: FormSection[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

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
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "0 10px",
        width: "100%",
      }}
    >
      {sections.map((section) => (
        <div
          key={section.id}
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
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
          <div
            style={{
              position: "absolute",
              left: "50px",
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
