import React from "react";
import type { CvData } from "../../../types";

interface ClassicTemplateProps {
  cvData: CvData;
}

const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ cvData }) => {
  const { basics, summary, education, experience, skills } = cvData;

  // Styles - Classic Professional Template
  const styles = {
    container: {
      fontSize: "14px",
      lineHeight: 1.5,
      color: "#333",
      background: "#fff",
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      fontFamily:
        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      minHeight: "297mm", // A4 height
    } as React.CSSProperties,

    header: {
      display: "flex",
      marginBottom: "30px",
      gap: "20px",
      alignItems: "flex-start",
    } as React.CSSProperties,

    profileImageContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "0px",
      minWidth: "100px",
      minHeight: "100px",
      flexShrink: 0,
    } as React.CSSProperties,

    profileImage: {
      width: "100px",
      height: "100px",
      borderRadius: "6px",
      objectFit: "cover" as const,
      border: "3px solid #f0f0f0",
    } as React.CSSProperties,

    headerInfo: {
      flex: 1,
    } as React.CSSProperties,

    name: {
      fontSize: "32px",
      fontWeight: 700,
      color: "#1a1a1a",
      lineHeight: 1.2,
      marginBottom: "8px",
      margin: 0,
    } as React.CSSProperties,

    headline: {
      fontSize: "18px",
      color: "#666",
      lineHeight: 1.3,
      marginBottom: "20px",
      fontWeight: 400,
      margin: "8px 0 20px 0",
    } as React.CSSProperties,

    contactInfo: {
      display: "flex",
      flexWrap: "wrap" as const,
      alignItems: "center",
      gap: "20px",
      fontSize: "14px",
      color: "#333",
    } as React.CSSProperties,

    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
    } as React.CSSProperties,

    section: {
      marginBottom: "30px",
    } as React.CSSProperties,

    sectionTitle: {
      fontSize: "16px",
      fontWeight: 700,
      textTransform: "uppercase" as const,
      marginBottom: "15px",
      borderBottom: "2px solid #333",
      paddingBottom: "5px",
      color: "#1a1a1a",
      letterSpacing: "0.5px",
    } as React.CSSProperties,

    summaryContent: {
      fontSize: "15px",
      lineHeight: 1.6,
      color: "#444",
      textAlign: "justify" as const,
    } as React.CSSProperties,

    experienceItem: {
      marginBottom: "25px",
    } as React.CSSProperties,

    experienceHeader: {
      marginBottom: "8px",
    } as React.CSSProperties,

    experienceTitleAndDuration: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "4px",
    } as React.CSSProperties,

    experiencePosition: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#1a1a1a",
      margin: 0,
    } as React.CSSProperties,

    experienceCompanyAndLocation: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "8px",
    } as React.CSSProperties,

    experienceCompany: {
      fontSize: "14px",
      fontWeight: 600,
      color: "#666",
    } as React.CSSProperties,

    experienceDuration: {
      fontSize: "13px",
      color: "#666",
      fontStyle: "italic" as const,
      display: "flex",
      alignItems: "center",
      gap: "4px",
    } as React.CSSProperties,

    experienceLocation: {
      fontSize: "13px",
      color: "#666",
      display: "flex",
      alignItems: "center",
      gap: "4px",
    } as React.CSSProperties,

    experienceDescription: {
      fontSize: "14px",
      lineHeight: 1.6,
      color: "#444",
      textAlign: "justify" as const,
    } as React.CSSProperties,

    educationItem: {
      marginBottom: "20px",
      display: "flex",
      flexDirection: "column" as const,
      gap: "4px",
    } as React.CSSProperties,

    educationHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
    } as React.CSSProperties,

    educationCourse: {
      fontSize: "16px",
      fontWeight: "bold",
      marginBottom: "2px",
      color: "#1a1a1a",
    } as React.CSSProperties,

    educationInstitution: {
      fontSize: "14px",
      color: "#666",
      fontWeight: 500,
    } as React.CSSProperties,

    educationMeta: {
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "flex-end",
      gap: "2px",
      fontSize: "13px",
      color: "#666",
    } as React.CSSProperties,

    educationYear: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
    } as React.CSSProperties,

    educationScore: {
      fontWeight: 600,
      color: "#1a1a1a",
    } as React.CSSProperties,

    educationLocation: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
    } as React.CSSProperties,

    skillsContainer: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "15px",
    } as React.CSSProperties,

    skillCategory: {
      marginBottom: "8px",
    } as React.CSSProperties,

    skillCategoryTitle: {
      fontSize: "15px",
      fontWeight: 600,
      marginBottom: "8px",
      color: "#1a1a1a",
    } as React.CSSProperties,

    skillsList: {
      display: "flex",
      flexWrap: "wrap" as const,
      gap: "8px",
    } as React.CSSProperties,

    technicalSkill: {
      backgroundColor: "#e8f4f8",
      color: "#1565c0",
      padding: "6px 12px",
      borderRadius: "4px",
      fontSize: "13px",
      fontWeight: 500,
      border: "1px solid #bbdefb",
    } as React.CSSProperties,

    softSkill: {
      backgroundColor: "#f0f0f0",
      color: "#666",
      padding: "6px 12px",
      borderRadius: "4px",
      fontSize: "13px",
      fontWeight: 500,
      border: "1px solid #ddd",
    } as React.CSSProperties,

    icon: {
      width: "14px",
      height: "14px",
      display: "inline-block",
      fill: "currentColor",
      verticalAlign: "middle",
    } as React.CSSProperties,
  };

  // SVG Icons
  const icons = {
    phone: (
      <svg
        style={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
    email: (
      <svg
        style={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
      </svg>
    ),
    website: (
      <svg
        style={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    linkedin: (
      <svg
        style={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
    location: (
      <svg
        style={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
      </svg>
    ),
    calendar: (
      <svg
        style={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z" />
      </svg>
    ),
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        {basics.photo && (
          <div style={styles.profileImageContainer}>
            <img
              src={basics.photo}
              alt={`${basics.fullName}'s profile`}
              style={styles.profileImage}
            />
          </div>
        )}
        <div style={styles.headerInfo}>
          <h1 style={styles.name}>{basics.fullName || "Your Name"}</h1>
          <h2 style={styles.headline}>
            {basics.headline || "Your Professional Title"}
          </h2>
          <div style={styles.contactInfo}>
            {basics.phone && (
              <div style={styles.contactItem}>
                {icons.phone}
                <span>{basics.phone}</span>
              </div>
            )}
            {basics.email && (
              <div style={styles.contactItem}>
                {icons.email}
                <span>{basics.email}</span>
              </div>
            )}
            {basics.website && (
              <div style={styles.contactItem}>
                {icons.website}
                <span>{basics.website}</span>
              </div>
            )}
            {basics.linkedin && (
              <div style={styles.contactItem}>
                {icons.linkedin}
                <span>LinkedIn</span>
              </div>
            )}
            {basics.location && (
              <div style={styles.contactItem}>
                {icons.location}
                <span>{basics.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Summary Section */}
      {summary.content && (
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Professional Summary</h3>
          <p style={styles.summaryContent}>{summary.content}</p>
        </div>
      )}

      {/* Work Experience Section */}
      {experience.length > 0 && (
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Work Experience</h3>
          {experience.map((exp) => (
            <div key={exp.id} style={styles.experienceItem}>
              <div style={styles.experienceHeader}>
                <div style={styles.experienceTitleAndDuration}>
                  <h4 style={styles.experiencePosition}>{exp.position}</h4>
                  <div style={styles.experienceDuration}>
                    {icons.calendar}
                    {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                  </div>
                </div>
                <div style={styles.experienceCompanyAndLocation}>
                  <div style={styles.experienceCompany}>{exp.company}</div>
                  {exp.location && (
                    <div style={styles.experienceLocation}>
                      {icons.location}
                      {exp.location}
                    </div>
                  )}
                </div>
              </div>
              {exp.description && (
                <p style={styles.experienceDescription}>{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education Section */}
      {education.length > 0 && (
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Education</h3>
          {education.map((edu) => (
            <div key={edu.id} style={styles.educationItem}>
              <div style={styles.educationHeader}>
                <div>
                  <div style={styles.educationCourse}>{edu.course}</div>
                  <div style={styles.educationInstitution}>
                    {edu.institution}
                  </div>
                </div>
                <div style={styles.educationMeta}>
                  <div style={styles.educationYear}>
                    {icons.calendar}
                    {edu.year}
                  </div>
                  {edu.score && (
                    <div style={styles.educationScore}>Score: {edu.score}</div>
                  )}
                  {edu.location && (
                    <div style={styles.educationLocation}>
                      {icons.location}
                      {edu.location}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills Section */}
      {(skills.technical.length > 0 || skills.soft.length > 0) && (
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Skills & Competencies</h3>
          <div style={styles.skillsContainer}>
            {skills.technical.length > 0 && (
              <div style={styles.skillCategory}>
                <h4 style={styles.skillCategoryTitle}>Technical Skills</h4>
                <div style={styles.skillsList}>
                  {skills.technical.map((skill, index) => (
                    <span key={index} style={styles.technicalSkill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {skills.soft.length > 0 && (
              <div style={styles.skillCategory}>
                <h4 style={styles.skillCategoryTitle}>Soft Skills</h4>
                <div style={styles.skillsList}>
                  {skills.soft.map((skill, index) => (
                    <span key={index} style={styles.softSkill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassicTemplate;
