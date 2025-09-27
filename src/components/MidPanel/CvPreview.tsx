import React from "react";
import type { CvPreviewProps } from "../../types";
import ClassicTemplate from "../RightPanel/CvTemplates/ClassicTemplate";
import ModernTemplate from "../RightPanel/CvTemplates/ModernTemplate";

const CvPreview: React.FC<CvPreviewProps> = ({ cvData, template }) => {
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
