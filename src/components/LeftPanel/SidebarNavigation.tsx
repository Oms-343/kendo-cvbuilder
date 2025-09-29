import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Tooltip } from "@progress/kendo-react-tooltip";
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

// Styles - All CSS objects organized in one place
const styles = {
  sidebarContainer: {
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
  } as React.CSSProperties,

  sectionContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  } as React.CSSProperties,

  icon: {
    fontSize: "18px",
    lineHeight: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as React.CSSProperties,
};

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  sections,
  activeSection,
  onSectionClick,
}) => {
  return (
    <div style={styles.sidebarContainer}>
      {sections.map((section) => (
        <div key={section.id} style={styles.sectionContainer}>
          <Tooltip anchorElement="target" position="right">
            <Button
              onClick={() => onSectionClick(section.id)}
              fillMode={activeSection === section.id ? "solid" : "flat"}
              themeColor={activeSection === section.id ? "primary" : "base"}
              size="medium"
              title={section.title}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                minWidth: "auto",
                fontSize: "18px",
              }}
            >
              <span style={styles.icon}>{iconMap[section.icon] || "📋"}</span>
            </Button>
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default SidebarNavigation;
