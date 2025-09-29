import React from "react";
import type { ModernTemplateProps } from "../../../types";
import DOMPurify from "dompurify";

const ModernTemplate: React.FC<ModernTemplateProps> = ({ cvData }) => {
  const { basics, summary, education, experience, skills, languages } = cvData;

  // Styles - Modern Two-Column Template with matching font sizes from Classic
  const styles = {
    container: {
      fontSize: "14px",
      lineHeight: 1.5,
      color: "#333",
      background: "#fff",
      maxWidth: "800px",
      margin: "0 auto",
      padding: "0",
      fontFamily:
        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      minHeight: "297mm", // A4 height
      display: "flex",
    } as React.CSSProperties,

    leftColumn: {
      width: "240px",
      backgroundColor: "#2c3e50",
      color: "#fff",
      padding: "30px 25px",
      display: "flex",
      flexDirection: "column" as const,
      gap: "25px",
    } as React.CSSProperties,

    rightColumn: {
      flex: 1,
      padding: "30px 25px",
      backgroundColor: "#fff",
    } as React.CSSProperties,

    // Left Column Styles
    profileImageContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
    } as React.CSSProperties,

    profileImage: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      objectFit: "cover" as const,
      border: "4px solid #fff",
    } as React.CSSProperties,

    leftName: {
      fontSize: "22px",
      fontWeight: 700,
      color: "#fff",
      textAlign: "center" as const,
      marginBottom: "8px",
      lineHeight: "1.2",
    } as React.CSSProperties,

    leftHeadline: {
      fontSize: "14px",
      color: "#bdc3c7",
      textAlign: "center" as const,
      marginBottom: "25px",
      fontWeight: 400,
    } as React.CSSProperties,

    leftSectionTitle: {
      fontSize: "14px",
      fontWeight: 700,
      textTransform: "uppercase" as const,
      marginBottom: "12px",
      borderBottom: "2px solid #34495e",
      paddingBottom: "8px",
      color: "#fff",
    } as React.CSSProperties,

    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "8px",
      fontSize: "12px",
      lineHeight: "1.4",
    } as React.CSSProperties,

    contactIcon: {
      width: "14px",
      height: "14px",
      fill: "#bdc3c7",
      flexShrink: 0,
    } as React.CSSProperties,

    contactText: {
      color: "#ecf0f1",
      fontSize: "12px",
    } as React.CSSProperties,

    skillItem: {
      backgroundColor: "#34495e",
      color: "#ecf0f1",
      padding: "4px 8px",
      borderRadius: "3px",
      fontSize: "11px",
      marginBottom: "6px",
      display: "inline-block",
      marginRight: "6px",
    } as React.CSSProperties,

    languageItem: {
      fontSize: "12px",
      color: "#ecf0f1",
      marginBottom: "6px",
      display: "block",
    } as React.CSSProperties,

    // Right Column Styles
    rightName: {
      fontSize: "26px",
      fontWeight: 700,
      color: "#2c3e50",
      marginBottom: "8px",
      lineHeight: "1.2",
    } as React.CSSProperties,

    rightHeadline: {
      fontSize: "16px",
      color: "#7f8c8d",
      marginBottom: "25px",
      fontWeight: 400,
    } as React.CSSProperties,

    rightSection: {
      marginBottom: "25px",
    } as React.CSSProperties,

    rightSectionTitle: {
      fontSize: "14px",
      fontWeight: 700,
      textTransform: "uppercase" as const,
      marginBottom: "12px",
      borderBottom: "2px solid #2c3e50",
      paddingBottom: "6px",
      color: "#2c3e50",
    } as React.CSSProperties,

    summaryContent: {
      fontSize: "12px",
      lineHeight: 1.6,
      color: "#444",
      textAlign: "justify" as const,
    } as React.CSSProperties,

    experienceItem: {
      marginBottom: "20px",
    } as React.CSSProperties,

    experiencePosition: {
      fontSize: "13px",
      fontWeight: "bold",
      color: "#2c3e50",
      marginBottom: "2px",
    } as React.CSSProperties,

    experienceCompany: {
      fontSize: "12px",
      fontWeight: 600,
      color: "#7f8c8d",
      marginBottom: "4px",
    } as React.CSSProperties,

    experienceDuration: {
      fontSize: "12px",
      color: "#95a5a6",
      marginBottom: "6px",
      fontStyle: "italic" as const,
    } as React.CSSProperties,

    experienceDescription: {
      fontSize: "12px",
      lineHeight: 1.5,
      color: "#444",
      textAlign: "justify" as const,
    } as React.CSSProperties,

    educationItem: {
      marginBottom: "15px",
    } as React.CSSProperties,

    educationCourse: {
      fontSize: "13px",
      fontWeight: "bold",
      color: "#2c3e50",
      marginBottom: "2px",
    } as React.CSSProperties,

    educationInstitution: {
      fontSize: "12px",
      color: "#7f8c8d",
      fontWeight: 500,
      marginBottom: "2px",
    } as React.CSSProperties,

    educationDetails: {
      fontSize: "12px",
      color: "#95a5a6",
    } as React.CSSProperties,

    icon: {
      width: "14px",
      height: "14px",
      display: "inline-block",
      fill: "currentColor",
      verticalAlign: "middle",
    } as React.CSSProperties,
  };

  return (
    <div style={styles.container}>
      {/* Left Column - Personal Info & Contact */}
      <div style={styles.leftColumn}>
        {/* Profile Photo */}
        {basics.photo && (
          <div style={styles.profileImageContainer}>
            <img
              src={basics.photo}
              alt={`${basics.fullName}'s profile`}
              style={styles.profileImage}
            />
          </div>
        )}

        {/* Name and Title */}
        <div>
          <h1 style={styles.leftName}>{basics.fullName || "Your Name"}</h1>
          <h2 style={styles.leftHeadline}>
            {basics.headline || "Your Professional Title"}
          </h2>
        </div>

        {/* Contact Information */}
        <div>
          <h3 style={styles.leftSectionTitle}>Contact</h3>
          {basics.phone && (
            <div style={styles.contactItem}>
              <svg style={styles.contactIcon} viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span style={styles.contactText}>{basics.phone}</span>
            </div>
          )}
          {basics.email && (
            <div style={styles.contactItem}>
              <svg style={styles.contactIcon} viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
              </svg>
              <span style={styles.contactText}>{basics.email}</span>
            </div>
          )}
          {basics.website && (
            <div style={styles.contactItem}>
              <svg style={styles.contactIcon} viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              <a
                href={
                  basics.website.startsWith("http")
                    ? basics.website
                    : `https://${basics.website}`
                }
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#ecf0f1",
                  textDecoration: "none",
                  fontSize: "12px",
                }}
              >
                <span>Website</span>
              </a>
            </div>
          )}
          {basics.linkedin && (
            <div style={styles.contactItem}>
              <svg style={styles.contactIcon} viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <a
                href={
                  basics.linkedin.startsWith("http")
                    ? basics.linkedin
                    : `https://linkedin.com/in/${basics.linkedin}`
                }
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#ecf0f1",
                  textDecoration: "none",
                  fontSize: "12px",
                }}
              >
                <span>LinkedIn</span>
              </a>
            </div>
          )}
          {basics.location && (
            <div style={styles.contactItem}>
              <svg style={styles.contactIcon} viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>
              <span style={styles.contactText}>{basics.location}</span>
            </div>
          )}
        </div>

        {/* Skills Section */}
        {(skills.technical.length > 0 || skills.soft.length > 0) && (
          <div>
            <h3 style={styles.leftSectionTitle}>Skills</h3>
            {skills.technical.length > 0 && (
              <div style={{ marginBottom: "15px" }}>
                {skills.technical.map((skill, index) => (
                  <span key={index} style={styles.skillItem}>
                    {skill}
                  </span>
                ))}
              </div>
            )}
            {skills.soft.length > 0 && (
              <div>
                {skills.soft.map((skill, index) => (
                  <span key={index} style={styles.skillItem}>
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Languages Section */}
        {languages && languages.length > 0 && (
          <div>
            <h3 style={styles.leftSectionTitle}>Languages</h3>
            {languages.map((language, index) => (
              <div key={index} style={styles.languageItem}>
                {language}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Column - Main Content */}
      <div style={styles.rightColumn}>
        {/* Summary Section */}
        {summary.content && (
          <div style={styles.rightSection}>
            <h3 style={styles.rightSectionTitle}>Professional Summary</h3>
            <div
              style={styles.summaryContent}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(summary.content || ""),
              }}
            />
          </div>
        )}

        {/* Experience Section */}
        {experience.length > 0 && (
          <div style={styles.rightSection}>
            <h3 style={styles.rightSectionTitle}>Work Experience</h3>
            {experience.map((exp) => (
              <div key={exp.id} style={styles.experienceItem}>
                <h4 style={styles.experiencePosition}>{exp.position}</h4>
                <div style={styles.experienceCompany}>
                  {exp.company}
                  {exp.location && ` • ${exp.location}`}
                </div>
                <div style={styles.experienceDuration}>
                  {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                </div>
                {exp.description && (
                  <div
                    style={styles.experienceDescription}
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(exp.description || ""),
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education Section */}
        {education.length > 0 && (
          <div style={styles.rightSection}>
            <h3 style={styles.rightSectionTitle}>Education</h3>
            {education.map((edu) => (
              <div key={edu.id} style={styles.educationItem}>
                <h4 style={styles.educationCourse}>{edu.course}</h4>
                <div style={styles.educationInstitution}>{edu.institution}</div>
                <div style={styles.educationDetails}>
                  {edu.year}
                  {edu.score && ` • Score: ${edu.score}`}
                  {edu.location && ` • ${edu.location}`}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModernTemplate;
