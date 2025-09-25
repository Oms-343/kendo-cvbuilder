import React from "react";
import type { CvData } from "../CvBuilder";

interface CvPreviewProps {
  cvData: CvData;
  template: string;
}

const CvPreview: React.FC<CvPreviewProps> = ({ cvData }) => {
  const { basics, summary, education, experience, skills } = cvData;

  const renderModernTemplate = () => (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#333",
        height: "100%",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          borderBottom: "3px solid #1976d2",
          paddingBottom: "20px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "30px",
          }}
        >
          {basics.photo && (
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                border: "4px solid #1976d2",
              }}
            >
              <img
                src={basics.photo}
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          )}
          <div style={{ flex: 1 }}>
            <h1
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "#1976d2",
                margin: "0 0 10px 0",
              }}
            >
              {basics.fullName || "Your Name"}
            </h1>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "300",
                color: "#666",
                margin: "0 0 20px 0",
              }}
            >
              {basics.headline || "Your Professional Title"}
            </h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                fontSize: "14px",
              }}
            >
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
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
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
        <div style={{ marginBottom: "30px" }}>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#1976d2",
              marginBottom: "15px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Summary
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6", margin: 0 }}>
            {summary.content}
          </p>
        </div>
      )}

      {/* Experience Section */}
      {experience.length > 0 && (
        <div style={{ marginBottom: "30px" }}>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#1976d2",
              marginBottom: "15px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Work Experience
          </h3>
          {experience.map((exp) => (
            <div key={exp.id} style={{ marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "5px",
                }}
              >
                <div>
                  <h4
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      margin: "0",
                      color: "#333",
                    }}
                  >
                    {exp.position}
                  </h4>
                  <div
                    style={{
                      fontSize: "16px",
                      color: "#666",
                      marginTop: "2px",
                    }}
                  >
                    {exp.company} {exp.location && `• ${exp.location}`}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    fontStyle: "italic",
                  }}
                >
                  {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                </div>
              </div>
              {exp.description && (
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.5",
                    margin: "10px 0 0 0",
                    color: "#555",
                  }}
                >
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education Section */}
      {education.length > 0 && (
        <div style={{ marginBottom: "30px" }}>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#1976d2",
              marginBottom: "15px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Education
          </h3>
          {education.map((edu) => (
            <div key={edu.id} style={{ marginBottom: "15px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div>
                  <h4
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      margin: "0",
                      color: "#333",
                    }}
                  >
                    {edu.course}
                  </h4>
                  <div
                    style={{
                      fontSize: "15px",
                      color: "#666",
                      marginTop: "2px",
                    }}
                  >
                    {edu.institution}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    textAlign: "right",
                  }}
                >
                  <div>{edu.year}</div>
                  {edu.score && (
                    <div style={{ fontWeight: "bold", color: "#1976d2" }}>
                      {edu.score}
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
        <div style={{ marginBottom: "30px" }}>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#1976d2",
              marginBottom: "15px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Skills
          </h3>
          {skills.technical.length > 0 && (
            <div style={{ marginBottom: "10px" }}>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  margin: "0 0 8px 0",
                  color: "#333",
                }}
              >
                Technical Skills
              </h4>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {skills.technical.map((skill, index) => (
                  <span
                    key={index}
                    style={{
                      background: "#e3f2fd",
                      color: "#1976d2",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          {skills.soft.length > 0 && (
            <div>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  margin: "0 0 8px 0",
                  color: "#333",
                }}
              >
                Soft Skills
              </h4>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {skills.soft.map((skill, index) => (
                  <span
                    key={index}
                    style={{
                      background: "#f0f0f0",
                      color: "#666",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        color: "#666",
        fontSize: "18px",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <div>
        <div style={{ fontSize: "48px", marginBottom: "20px" }}>📄</div>
        <div>Your CV preview will appear here</div>
        <div style={{ fontSize: "14px", marginTop: "10px", color: "#999" }}>
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
