import React, { useRef } from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { Button } from "@progress/kendo-react-buttons";
import type { CvData } from "../types";
import ClassicTemplate from "./RightPanel/CvTemplates/ClassicTemplate";

interface PdfGeneratorProps {
  cvData: CvData;
  template: string;
  children?: React.ReactNode;
}

const PdfGenerator: React.FC<PdfGeneratorProps> = ({
  cvData,
  template,
  children,
}) => {
  const pdfExportComponent = useRef<PDFExport>(null);

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  const exportPDFWithMethod = () => {
    const element = document.querySelector(".cv-content-for-pdf");
    if (element) {
      savePDF(element as HTMLElement, {
        paperSize: "A4",
        fileName: `${cvData.basics.fullName || "CV"}_Resume.pdf`,
        margin: {
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
        },
      });
    }
  };

  const renderTemplate = () => {
    switch (template) {
      case "classic":
        return <ClassicTemplate cvData={cvData} />;
      case "modern":
      default:
        // For now, fallback to classic template
        return <ClassicTemplate cvData={cvData} />;
    }
  };

  const buttonStyle: React.CSSProperties = {
    margin: "10px",
    backgroundColor: "#1976d2",
    borderColor: "#1976d2",
  };

  return (
    <div>
      {/* PDF Export using Component Method */}
      <div
        style={{
          marginBottom: "20px",
          padding: "10px",
          borderRadius: "4px",
        }}
      >
        <Button
          themeColor="primary"
          style={buttonStyle}
          onClick={exportPDFWithComponent}
          icon="file-pdf"
        >
          Generate PDF (Component)
        </Button>

        <Button
          style={buttonStyle}
          onClick={exportPDFWithMethod}
          icon="file-pdf"
        >
          Generate PDF (Method)
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
        <div className="cv-content-for-pdf">{children || renderTemplate()}</div>
      </PDFExport>
    </div>
  );
};

export default PdfGenerator;
