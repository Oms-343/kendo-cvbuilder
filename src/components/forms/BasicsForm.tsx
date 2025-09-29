import React from "react";
import { TextBox, MaskedTextBox } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { Label } from "@progress/kendo-react-labels";
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
          <Button
            fillMode="solid"
            themeColor="primary"
            size="small"
            onClick={() => document.getElementById("photo-input")?.click()}
          >
            Choose Image
          </Button>
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
            <Label>
              Full Name <span style={styles.requiredAsterisk}>*</span>
            </Label>
            <TextBox
              value={data.fullName}
              onChange={handleInputChange("fullName")}
              placeholder="jason filler"
              style={{ width: "100%" }}
            />
          </div>
          {/* Headline */}
          <div style={styles.formField}>
            <Label>
              Headline <span style={styles.requiredAsterisk}>*</span>
            </Label>
            <TextBox
              value={data.headline}
              onChange={handleInputChange("headline")}
              placeholder="Senior Manager"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Email */}
      <div style={styles.formField}>
        <Label>
          Email <span style={styles.requiredAsterisk}>*</span>
        </Label>
        <TextBox
          type="email"
          value={data.email}
          onChange={handleInputChange("email")}
          placeholder="abcn@example.com"
          style={{ width: "100%" }}
        />
      </div>

      {/* Phone */}
      <div style={styles.formField}>
        <Label>
          Phone <span style={styles.requiredAsterisk}>*</span>
        </Label>
        <MaskedTextBox
          mask="+00 0000000000"
          value={data.phone}
          onChange={handleInputChange("phone")}
          placeholder="+91 1234567890"
          style={{ width: "100%" }}
        />
      </div>

      {/* Website */}
      <div style={styles.formField}>
        <Label>Website</Label>
        <TextBox
          type="url"
          value={data.website}
          onChange={handleInputChange("website")}
          placeholder="https://example.com"
          suffix={<span>🔗</span>}
          style={{ width: "100%" }}
        />
      </div>

      {/* LinkedIn */}
      <div style={styles.formField}>
        <Label>
          LinkedIn <span style={styles.requiredAsterisk}>*</span>
        </Label>
        <TextBox
          type="url"
          value={data.linkedin}
          onChange={handleInputChange("linkedin")}
          placeholder="https://linkedin.com/in/username"
          style={{ width: "100%" }}
        />
      </div>

      {/* Location */}
      <div style={styles.formField}>
        <Label>Location</Label>
        <TextBox
          value={data.location}
          onChange={handleInputChange("location")}
          placeholder="City, State"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default BasicsForm;
