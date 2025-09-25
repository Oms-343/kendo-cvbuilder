import React, { useState } from "react";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";

interface BasicsFormData {
  fullName: string;
  headline: string;
  email: string;
  phone: string;
  website: string;
  linkedin: string;
  location: string;
  photo: string | null;
}

const BasicsForm: React.FC = () => {
  const [formData, setFormData] = useState<BasicsFormData>({
    fullName: "",
    headline: "",
    email: "",
    phone: "",
    website: "",
    linkedin: "",
    location: "",
    photo: null,
  });

  const handleInputChange = (field: keyof BasicsFormData) => (event: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData((prev) => ({
          ...prev,
          photo: e.target?.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="basics-form">
      {/* Photo Upload Section */}
      <div className="form-row">
        <div className="photo-upload-section">
          <div className="photo-container">
            {formData.photo ? (
              <img
                src={formData.photo}
                alt="Profile"
                className="profile-photo"
              />
            ) : (
              <div className="photo-placeholder">
                <span>Upload Photo</span>
              </div>
            )}
          </div>
          <Button
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
            style={{ display: "none" }}
            onChange={handlePhotoUpload}
          />
        </div>
      </div>

      {/* Full Name */}
      <div className="form-row">
        <label className="form-label required">
          Full Name <span className="required-asterisk">*</span>
        </label>
        <Input
          value={formData.fullName}
          onChange={handleInputChange("fullName")}
          placeholder="jason filler"
        />
      </div>

      {/* Headline */}
      <div className="form-row">
        <label className="form-label required">
          Headline <span className="required-asterisk">*</span>
        </label>
        <Input
          value={formData.headline}
          onChange={handleInputChange("headline")}
          placeholder="Senior Manager"
        />
      </div>

      {/* Email */}
      <div className="form-row">
        <label className="form-label required">
          Email <span className="required-asterisk">*</span>
        </label>
        <Input
          value={formData.email}
          onChange={handleInputChange("email")}
          placeholder="abcn@example.com"
          type="email"
        />
      </div>

      {/* Phone */}
      <div className="form-row">
        <label className="form-label required">
          Phone <span className="required-asterisk">*</span>
        </label>
        <Input
          value={formData.phone}
          onChange={handleInputChange("phone")}
          placeholder="+91 1234567890"
          type="tel"
        />
      </div>

      {/* Website */}
      <div className="form-row">
        <label className="form-label">Website</label>
        <div className="input-with-icon">
          <Input
            value={formData.website}
            onChange={handleInputChange("website")}
            placeholder="https://example.com"
            type="url"
          />
          <span className="input-icon">🔗</span>
        </div>
      </div>

      {/* LinkedIn */}
      <div className="form-row">
        <label className="form-label required">
          LinkedIn <span className="required-asterisk">*</span>
        </label>
        <Input
          value={formData.linkedin}
          onChange={handleInputChange("linkedin")}
          placeholder="https://linkedin.com/in/username"
          type="url"
        />
      </div>

      {/* Location */}
      <div className="form-row">
        <label className="form-label">Location</label>
        <Input
          value={formData.location}
          onChange={handleInputChange("location")}
          placeholder="City, State"
        />
      </div>
    </div>
  );
};

export default BasicsForm;
