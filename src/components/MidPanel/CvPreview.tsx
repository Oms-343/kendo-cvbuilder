import React from "react";
import type { CvPreviewProps } from "../../types";
import ClassicTemplate from "../RightPanel/CvTemplates/ClassicTemplate";
import ModernTemplate from "../RightPanel/CvTemplates/ModernTemplate";

// CSS objects for empty state only

const emptyStateStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  color: "#666",
  fontSize: "18px",
  textAlign: "center",
  padding: "40px",
};

const emptyStateContentStyle: React.CSSProperties = {
  fontSize: "48px",
  marginBottom: "20px",
};

const emptyStateTextStyle: React.CSSProperties = {
  fontSize: "14px",
  marginTop: "10px",
  color: "#999",
};

const CvPreview: React.FC<CvPreviewProps> = ({ cvData, template }) => {
  const { basics, summary, education, experience, skills } = cvData;

  const renderEmptyState = () => (
    <div style={emptyStateStyle}>
      <div>
        <div style={emptyStateContentStyle}>📄</div>
        <div>Your CV preview will appear here</div>
        <div style={emptyStateTextStyle}>
          Fill out the forms on the left to see your CV
        </div>
      </div>
    </div>
  );

  // Check if there's any data to show
  const hasData =
    basics.fullName ||
    basics.email ||
    summary.content ||
    education.length > 0 ||
    experience.length > 0 ||
    skills.technical.length > 0 ||
    skills.soft.length > 0;

  if (!hasData) {
    return renderEmptyState();
  }

  // Render template based on selection
  const renderTemplate = () => {
    switch (template) {
      case "classic":
        return <ClassicTemplate cvData={cvData} />;
      case "modern":
      default:
        return <ModernTemplate cvData={cvData} />;
    }
  };

  return renderTemplate();
};

export default CvPreview;
