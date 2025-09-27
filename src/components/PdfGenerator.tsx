import React, { useRef } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import { Button } from "@progress/kendo-react-buttons";
import type { PdfGeneratorProps } from "../types";
import ClassicTemplate from "./RightPanel/CvTemplates/ClassicTemplate";
import ModernTemplate from "./RightPanel/CvTemplates/ModernTemplate";

const exportAreaStyle: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  right: "10px",
  zIndex: 10,
  backgroundColor: "#ffffff",
  padding: "8px 16px",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  border: "1px solid #e0e0e0",
};

const buttonStyle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: "500",
  padding: "8px 16px",
  backgroundColor: "#6366f1",
  borderColor: "#6366f1",
  borderRadius: "6px",
  color: "#ffffff",
};

const PdfGenerator: React.FC<PdfGeneratorProps> = ({ cvData, template }) => {
  const pdfExportComponent = useRef<PDFExport>(null);

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  const renderTemplate = () => {
    switch (template) {
      case "classic":
        return <ClassicTemplate cvData={cvData} />;
      case "modern":
      default:
        return <ModernTemplate cvData={cvData} />;
    }
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Export Button - Positioned relatively to the CV area */}
      <div style={exportAreaStyle}>
        <Button
          themeColor="primary"
          style={buttonStyle}
          onClick={exportPDFWithComponent}
          icon="file-pdf"
        >
          Export
        </Button>
      </div>

      {/* PDF Export Component Wrapper */}
      <PDFExport
        ref={pdfExportComponent}
        paperSize="A4"
        fileName={`${cvData.basics.fullName || "CV"}_Resume.pdf`}
        margin={{
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
        }}
      >
        <div className="cv-content-for-pdf">{renderTemplate()}</div>
      </PDFExport>
    </div>
  );
};

export default PdfGenerator;
