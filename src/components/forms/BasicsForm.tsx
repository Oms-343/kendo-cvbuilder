import React from "react";
import type { BasicsData, BasicsFormProps } from "../../types";

// Styles - All CSS objects organized in one place
const styles = {
  formContainer: {
    width: "100%",
  } as React.CSSProperties,

  photoUploadSection: {
    marginBottom: "20px",
    display: "flex",
    gap: "25px",
  } as React.CSSProperties,

  photoUploadContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "20px",
    padding: "20px 0",
    paddingTop: "0",
  } as React.CSSProperties,

  photoPlaceholder: {
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
  } as React.CSSProperties,

  photoImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  } as React.CSSProperties,

  photoPlaceholderText: {
    textAlign: "center",
    color: "#666",
    fontSize: "12px",
    lineHeight: "1.2",
  } as React.CSSProperties,

  uploadButton: {
    padding: "6px 12px",
    backgroundColor: "#1976d2",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "12px",
  } as React.CSSProperties,

  hiddenInput: {
    display: "none",
  } as React.CSSProperties,

  formField: {
    marginBottom: "20px",
  } as React.CSSProperties,

  label: {
    display: "block",
    fontSize: "14px",
    fontWeight: "500",
    color: "#333333",
    marginBottom: "8px",
    lineHeight: "1.4",
  } as React.CSSProperties,

  requiredAsterisk: {
    color: "#d32f2f",
    marginLeft: "2px",
  } as React.CSSProperties,

  input: {
    width: "100%",
    padding: "8px 12px",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    fontSize: "14px",
  } as React.CSSProperties,

  websiteInputContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  } as React.CSSProperties,

  websiteInput: {
    width: "100%",
    padding: "8px 12px",
    paddingRight: "32px",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    fontSize: "14px",
  } as React.CSSProperties,

  websiteIcon: {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "16px",
    color: "#666",
    pointerEvents: "none",
    zIndex: 1,
  } as React.CSSProperties,
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
    <div style={styles.formContainer}>
      {/* Photo Upload Section */}
      <div style={styles.photoUploadSection}>
        <div style={styles.photoUploadContainer}>
          <div style={styles.photoPlaceholder}>
            {data.photo ? (
              <img src={data.photo} alt="Profile" style={styles.photoImage} />
            ) : (
              <div style={styles.photoPlaceholderText}>
                <span>Upload Photo</span>
              </div>
            )}
          </div>
          <button
            style={styles.uploadButton}
            onClick={() => document.getElementById("photo-input")?.click()}
          >
            Choose Image
          </button>
          <input
            id="photo-input"
            type="file"
            accept="image/*"
            style={styles.hiddenInput}
            onChange={handlePhotoUpload}
          />
        </div>
        {/* Full Name */}
        <div>
          <div style={styles.formField}>
            <label style={styles.label}>
              Full Name <span style={styles.requiredAsterisk}>*</span>
            </label>
            <input
              type="text"
              value={data.fullName}
              onChange={handleInputChange("fullName")}
              placeholder="jason filler"
              style={styles.input}
            />
          </div>
          {/* Headline */}
          <div style={styles.formField}>
            <label style={styles.label}>
              Headline <span style={styles.requiredAsterisk}>*</span>
            </label>
            <input
              type="text"
              value={data.headline}
              onChange={handleInputChange("headline")}
              placeholder="Senior Manager"
              style={styles.input}
            />
          </div>
        </div>
      </div>

      {/* Email */}
      <div style={styles.formField}>
        <label style={styles.label}>
          Email <span style={styles.requiredAsterisk}>*</span>
        </label>
        <input
          type="email"
          value={data.email}
          onChange={handleInputChange("email")}
          placeholder="abcn@example.com"
          style={styles.input}
        />
      </div>

      {/* Phone */}
      <div style={styles.formField}>
        <label style={styles.label}>
          Phone <span style={styles.requiredAsterisk}>*</span>
        </label>
        <input
          type="tel"
          value={data.phone}
          onChange={handleInputChange("phone")}
          placeholder="+91 1234567890"
          style={styles.input}
        />
      </div>

      {/* Website */}
      <div style={styles.formField}>
        <label style={styles.label}>Website</label>
        <div style={styles.websiteInputContainer}>
          <input
            type="url"
            value={data.website}
            onChange={handleInputChange("website")}
            placeholder="https://example.com"
            style={styles.websiteInput}
          />
          <span style={styles.websiteIcon}>🔗</span>
        </div>
      </div>

      {/* LinkedIn */}
      <div style={styles.formField}>
        <label style={styles.label}>
          LinkedIn <span style={styles.requiredAsterisk}>*</span>
        </label>
        <input
          type="url"
          value={data.linkedin}
          onChange={handleInputChange("linkedin")}
          placeholder="https://linkedin.com/in/username"
          style={styles.input}
        />
      </div>

      {/* Location */}
      <div style={styles.formField}>
        <label style={styles.label}>Location</label>
        <input
          type="text"
          value={data.location}
          onChange={handleInputChange("location")}
          placeholder="City, State"
          style={styles.input}
        />
      </div>
    </div>
  );
};

export default BasicsForm;
