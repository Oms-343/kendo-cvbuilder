import React from "react";
import type { CvPreviewProps } from "../../types";

// CSS objects for cleaner code organization
const modernTemplateContainerStyle: React.CSSProperties = {
  padding: "40px",
  fontFamily: "Arial, sans-serif",
  lineHeight: "1.6",
  color: "#333",
  height: "100%",
};

const headerSectionStyle: React.CSSProperties = {
  borderBottom: "3px solid #1976d2",
  paddingBottom: "20px",
  marginBottom: "30px",
};

const headerContentStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: "30px",
};

const photoContainerStyle: React.CSSProperties = {
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  overflow: "hidden",
  flexShrink: 0,
  border: "4px solid #1976d2",
};

const photoImageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const headerInfoStyle: React.CSSProperties = {
  flex: 1,
};

const nameStyle: React.CSSProperties = {
  fontSize: "36px",
  fontWeight: "bold",
  color: "#1976d2",
  margin: "0 0 10px 0",
};

const headlineStyle: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: "300",
  color: "#666",
  margin: "0 0 20px 0",
};

const contactInfoRowStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  fontSize: "14px",
};

const contactInfoStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  fontSize: "14px",
  marginTop: "10px",
};

const sectionStyle: React.CSSProperties = {
  marginBottom: "30px",
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#1976d2",
  marginBottom: "15px",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const summaryContentStyle: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: "1.6",
  margin: 0,
};

const experienceItemStyle: React.CSSProperties = {
  marginBottom: "20px",
};

const experienceHeaderStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: "5px",
};

const experienceTitleStyle: React.CSSProperties = {
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0",
  color: "#333",
};

const experienceCompanyStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "#666",
  marginTop: "2px",
};

const experienceDateStyle: React.CSSProperties = {
  fontSize: "14px",
  color: "#666",
  fontStyle: "italic",
};

const experienceDescriptionStyle: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: "1.5",
  margin: "10px 0 0 0",
  color: "#555",
};

const educationItemStyle: React.CSSProperties = {
  marginBottom: "15px",
};

const educationHeaderStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
};

const educationTitleStyle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0",
  color: "#333",
};

const educationInstitutionStyle: React.CSSProperties = {
  fontSize: "15px",
  color: "#666",
  marginTop: "2px",
};

const educationDetailsStyle: React.CSSProperties = {
  fontSize: "14px",
  color: "#666",
  textAlign: "right",
};

const educationScoreStyle: React.CSSProperties = {
  fontWeight: "bold",
  color: "#1976d2",
};

const skillsSectionStyle: React.CSSProperties = {
  marginBottom: "30px",
};

const skillCategoryStyle: React.CSSProperties = {
  marginBottom: "10px",
};

const skillCategoryTitleStyle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0 0 8px 0",
  color: "#333",
};

const skillsContainerStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
};

const technicalSkillStyle: React.CSSProperties = {
  background: "#e3f2fd",
  color: "#1976d2",
  padding: "4px 12px",
  borderRadius: "20px",
  fontSize: "14px",
  fontWeight: "500",
};

const softSkillStyle: React.CSSProperties = {
  background: "#f0f0f0",
  color: "#666",
  padding: "4px 12px",
  borderRadius: "20px",
  fontSize: "14px",
  fontWeight: "500",
};

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

const CvPreview: React.FC<CvPreviewProps> = ({ cvData }) => {
  const { basics, summary, education, experience, skills } = cvData;

  const renderModernTemplate = () => (
    <div style={modernTemplateContainerStyle}>
      {/* Header Section */}
      <div style={headerSectionStyle}>
        <div style={headerContentStyle}>
          {basics.photo && (
            <div style={photoContainerStyle}>
              <img src={basics.photo} alt="Profile" style={photoImageStyle} />
            </div>
          )}
          <div style={headerInfoStyle}>
            <h1 style={nameStyle}>{basics.fullName || "Your Name"}</h1>
            <h2 style={headlineStyle}>
              {basics.headline || "Your Professional Title"}
            </h2>
            <div style={contactInfoRowStyle}>
              {basics.email && (
                <div>
                  <strong>Email:</strong> {basics.email}
                </div>
              )}
              {basics.phone && (
                <div>
                  <strong>Phone:</strong> {basics.phone}
                </div>
              )}
              {basics.location && (
                <div>
                  <strong>Location:</strong> {basics.location}
                </div>
              )}
            </div>
            <div style={contactInfoStyle}>
              {basics.website && (
                <div>
                  <strong>Website:</strong> {basics.website}
                </div>
              )}
              {basics.linkedin && (
                <div>
                  <strong>LinkedIn:</strong> {basics.linkedin}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      {summary.content && (
        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>Summary</h3>
          <p style={summaryContentStyle}>{summary.content}</p>
        </div>
      )}

      {/* Experience Section */}
      {experience.length > 0 && (
        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>Work Experience</h3>
          {experience.map((exp) => (
            <div key={exp.id} style={experienceItemStyle}>
              <div style={experienceHeaderStyle}>
                <div>
                  <h4 style={experienceTitleStyle}>{exp.position}</h4>
                  <div style={experienceCompanyStyle}>
                    {exp.company} {exp.location && `• ${exp.location}`}
                  </div>
                </div>
                <div style={experienceDateStyle}>
                  {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                </div>
              </div>
              {exp.description && (
                <p style={experienceDescriptionStyle}>{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education Section */}
      {education.length > 0 && (
        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>Education</h3>
          {education.map((edu) => (
            <div key={edu.id} style={educationItemStyle}>
              <div style={educationHeaderStyle}>
                <div>
                  <h4 style={educationTitleStyle}>{edu.course}</h4>
                  <div style={educationInstitutionStyle}>{edu.institution}</div>
                </div>
                <div style={educationDetailsStyle}>
                  <div>{edu.year}</div>
                  {edu.score && (
                    <div style={educationScoreStyle}>{edu.score}</div>
                  )}
                  <div>{edu.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills Section */}
      {(skills.technical.length > 0 || skills.soft.length > 0) && (
        <div style={skillsSectionStyle}>
          <h3 style={sectionTitleStyle}>Skills</h3>
          {skills.technical.length > 0 && (
            <div style={skillCategoryStyle}>
              <h4 style={skillCategoryTitleStyle}>Technical Skills</h4>
              <div style={skillsContainerStyle}>
                {skills.technical.map((skill, index) => (
                  <span key={index} style={technicalSkillStyle}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          {skills.soft.length > 0 && (
            <div>
              <h4 style={skillCategoryTitleStyle}>Soft Skills</h4>
              <div style={skillsContainerStyle}>
                {skills.soft.map((skill, index) => (
                  <span key={index} style={softSkillStyle}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

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

  // For now, only render the modern template
  // Later we can add switch cases for different templates
  return renderModernTemplate();
};

export default CvPreview;
