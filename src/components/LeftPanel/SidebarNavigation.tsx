import React from "react";
import { Button } from "@progress/kendo-react-buttons";

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
    <div className="sidebar-nav">
      {sections.map((section) => (
        <div key={section.id} className="nav-item">
          <Button
            className={`nav-button ${
              activeSection === section.id ? "active" : ""
            }`}
            onClick={() => onSectionClick(section.id)}
            title={section.title}
          >
            <span className="nav-icon">{iconMap[section.icon] || "📋"}</span>
          </Button>
          <div className="nav-tooltip">{section.title}</div>
        </div>
      ))}
    </div>
  );
};

export default SidebarNavigation;
