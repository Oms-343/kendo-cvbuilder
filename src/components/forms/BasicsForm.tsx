import React from "react";
import type { BasicsData, BasicsFormProps } from "../../types";

// CSS objects for cleaner code organization
const formContainerStyle: React.CSSProperties = {
  width: "100%",
};

const photoUploadSectionStyle: React.CSSProperties = {
  marginBottom: "20px",
};

const photoUploadContainerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  padding: "20px 0",
};

const photoPlaceholderStyle: React.CSSProperties = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  border: "2px dashed #e0e0e0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f8f9fa",
  overflow: "hidden",
  position: "relative",
};

const photoImageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "50%",
};

const photoPlaceholderTextStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#666",
  fontSize: "12px",
  lineHeight: "1.2",
};

const uploadButtonStyle: React.CSSProperties = {
  padding: "6px 12px",
  backgroundColor: "#1976d2",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "12px",
};

const hiddenInputStyle: React.CSSProperties = {
  display: "none",
};

const formFieldStyle: React.CSSProperties = {
  marginBottom: "20px",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "14px",
  fontWeight: "500",
  color: "#333333",
  marginBottom: "8px",
  lineHeight: "1.4",
};

const requiredAsteriskStyle: React.CSSProperties = {
  color: "#d32f2f",
  marginLeft: "2px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "8px 12px",
  border: "1px solid #e0e0e0",
  borderRadius: "4px",
  fontSize: "14px",
};

const websiteInputContainerStyle: React.CSSProperties = {
  position: "relative",
  display: "flex",
  alignItems: "center",
};

const websiteInputStyle: React.CSSProperties = {
  width: "100%",
  padding: "8px 12px",
  paddingRight: "32px",
  border: "1px solid #e0e0e0",
  borderRadius: "4px",
  fontSize: "14px",
};

const websiteIconStyle: React.CSSProperties = {
  position: "absolute",
  right: "12px",
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: "16px",
  color: "#666",
  pointerEvents: "none",
  zIndex: 1,
};

const BasicsForm: React.FC<BasicsFormProps> = ({ data, onUpdate }) => {
  const handleInputChange = (field: keyof BasicsData) => (event: any) => {
    onUpdate({
      [field]: event.target.value,
    });
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onUpdate({
          photo: e.target?.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={formContainerStyle}>
      {/* Photo Upload Section */}
      <div style={photoUploadSectionStyle}>
        <div style={photoUploadContainerStyle}>
          <div style={photoPlaceholderStyle}>
            {data.photo ? (
              <img src={data.photo} alt="Profile" style={photoImageStyle} />
            ) : (
              <div style={photoPlaceholderTextStyle}>
                <span>Upload Photo</span>
              </div>
            )}
          </div>
          <button
            style={uploadButtonStyle}
            onClick={() => document.getElementById("photo-input")?.click()}
          >
            Choose Image
          </button>
          <input
            id="photo-input"
            type="file"
            accept="image/*"
            style={hiddenInputStyle}
            onChange={handlePhotoUpload}
          />
        </div>
      </div>

      {/* Full Name */}
      <div style={formFieldStyle}>
        <label style={labelStyle}>
          Full Name <span style={requiredAsteriskStyle}>*</span>
        </label>
        <input
          type="text"
          value={data.fullName}
          onChange={handleInputChange("fullName")}
          placeholder="jason filler"
          style={inputStyle}
        />
      </div>

      {/* Headline */}
      <div style={formFieldStyle}>
        <label style={labelStyle}>
          Headline <span style={requiredAsteriskStyle}>*</span>
        </label>
        <input
          type="text"
          value={data.headline}
          onChange={handleInputChange("headline")}
          placeholder="Senior Manager"
          style={inputStyle}
        />
      </div>

      {/* Email */}
      <div style={formFieldStyle}>
        <label style={labelStyle}>
          Email <span style={requiredAsteriskStyle}>*</span>
        </label>
        <input
          type="email"
          value={data.email}
          onChange={handleInputChange("email")}
          placeholder="abcn@example.com"
          style={inputStyle}
        />
      </div>

      {/* Phone */}
      <div style={formFieldStyle}>
        <label style={labelStyle}>
          Phone <span style={requiredAsteriskStyle}>*</span>
        </label>
        <input
          type="tel"
          value={data.phone}
          onChange={handleInputChange("phone")}
          placeholder="+91 1234567890"
          style={inputStyle}
        />
      </div>

      {/* Website */}
      <div style={formFieldStyle}>
        <label style={labelStyle}>Website</label>
        <div style={websiteInputContainerStyle}>
          <input
            type="url"
            value={data.website}
            onChange={handleInputChange("website")}
            placeholder="https://example.com"
            style={websiteInputStyle}
          />
          <span style={websiteIconStyle}>🔗</span>
        </div>
      </div>

      {/* LinkedIn */}
      <div style={formFieldStyle}>
        <label style={labelStyle}>
          LinkedIn <span style={requiredAsteriskStyle}>*</span>
        </label>
        <input
          type="url"
          value={data.linkedin}
          onChange={handleInputChange("linkedin")}
          placeholder="https://linkedin.com/in/username"
          style={inputStyle}
        />
      </div>

      {/* Location */}
      <div style={formFieldStyle}>
        <label style={labelStyle}>Location</label>
        <input
          type="text"
          value={data.location}
          onChange={handleInputChange("location")}
          placeholder="City, State"
          style={inputStyle}
        />
      </div>
    </div>
  );
};

export default BasicsForm;
