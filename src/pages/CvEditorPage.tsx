import { Splitter } from "@progress/kendo-react-layout";
import LeftPanel from "../components/LeftPanel/LeftPanel";

const CvEditorPage = () => {
  return (
    <div className="cv-editor-page">
      <Splitter
        style={{ height: "100vh", width: "100%" }}
        panes={[
          { size: "400px", min: "300px", max: "500px", collapsible: false },
          { collapsible: false },
          { size: "300px", min: "50px", max: "400px", collapsible: false },
        ]}
      >
        {/* Left Panel - Forms */}
        <div className="left-panel">
          <LeftPanel />
        </div>

        {/* Middle Panel - Resume Preview */}
        <div className="middle-panel">
          <div className="resume-preview">
            <div className="a4-preview">Resume Preview (A4 Size)</div>
          </div>
        </div>

        {/* Right Panel - Template Selector */}
        <div className="right-panel">
          <div className="template-selector">Template Selector</div>
        </div>
      </Splitter>
    </div>
  );
};

export default CvEditorPage;
