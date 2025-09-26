import React from "react";
import type { BasicsData, BasicsFormProps } from "../../types";

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
    <div
      style={{
        width: "100%",
      }}
    >
      {/* Photo Upload Section */}
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "20px 0",
          }}
        >
          <div
            style={{
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
            }}
          >
            {data.photo ? (
              <img
                src={data.photo}
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            ) : (
              <div
                style={{
                  textAlign: "center",
                  color: "#666",
                  fontSize: "12px",
                  lineHeight: "1.2",
                }}
              >
                <span>Upload Photo</span>
              </div>
            )}
          </div>
          <button
            style={{
              padding: "6px 12px",
              backgroundColor: "#1976d2",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "12px",
            }}
            onClick={() => document.getElementById("photo-input")?.click()}
          >
            Choose Image
          </button>
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
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <label
          style={{
            display: "block",
            fontSize: "14px",
            fontWeight: "500",
            color: "#333333",
            marginBottom: "8px",
            lineHeight: "1.4",
          }}
        >
          Full Name{" "}
          <span
            style={{
              color: "#d32f2f",
              marginLeft: "2px",
            }}
          >
            *
          </span>
        </label>
        <input
          type="text"
          value={data.fullName}
          onChange={handleInputChange("fullName")}
          placeholder="jason filler"
          style={{
            width: "100%",
            padding: "8px 12px",
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
            fontSize: "14px",
          }}
        />
      </div>

      {/* Headline */}
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <label
          style={{
            display: "block",
            fontSize: "14px",
            fontWeight: "500",
            color: "#333333",
            marginBottom: "8px",
            lineHeight: "1.4",
          }}
        >
          Headline{" "}
          <span
            style={{
              color: "#d32f2f",
              marginLeft: "2px",
            }}
          >
            *
          </span>
        </label>
        <input
          type="text"
          value={data.headline}
          onChange={handleInputChange("headline")}
          placeholder="Senior Manager"
          style={{
            width: "100%",
            padding: "8px 12px",
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
            fontSize: "14px",
          }}
        />
      </div>

      {/* Email */}
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <label
          style={{
            display: "block",
            fontSize: "14px",
            fontWeight: "500",
            color: "#333333",
            marginBottom: "8px",
            lineHeight: "1.4",
          }}
        >
          Email{" "}
          <span
            style={{
              color: "#d32f2f",
              marginLeft: "2px",
            }}
          >
            *
          </span>
        </label>
        <input
          type="email"
          value={data.email}
          onChange={handleInputChange("email")}
          placeholder="abcn@example.com"
          style={{
            width: "100%",
            padding: "8px 12px",
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
            fontSize: "14px",
          }}
        />
      </div>

      {/* Phone */}
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <label
          style={{
            display: "block",
            fontSize: "14px",
            fontWeight: "500",
            color: "#333333",
            marginBottom: "8px",
            lineHeight: "1.4",
          }}
        >
          Phone{" "}
          <span
            style={{
              color: "#d32f2f",
              marginLeft: "2px",
            }}
          >
            *
          </span>
        </label>
        <input
          type="tel"
          value={data.phone}
          onChange={handleInputChange("phone")}
          placeholder="+91 1234567890"
          style={{
            width: "100%",
            padding: "8px 12px",
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
            fontSize: "14px",
          }}
        />
      </div>

      {/* Website */}
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <label
          style={{
            display: "block",
            fontSize: "14px",
            fontWeight: "500",
            color: "#333333",
            marginBottom: "8px",
            lineHeight: "1.4",
          }}
        >
          Website
        </label>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            type="url"
            value={data.website}
            onChange={handleInputChange("website")}
            placeholder="https://example.com"
            style={{
              width: "100%",
              padding: "8px 12px",
              paddingRight: "32px",
              border: "1px solid #e0e0e0",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          />
          <span
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "16px",
              color: "#666",
              pointerEvents: "none",
              zIndex: "1",
            }}
          >
            🔗
          </span>
        </div>
      </div>

      {/* LinkedIn */}
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <label
          style={{
            display: "block",
            fontSize: "14px",
            fontWeight: "500",
            color: "#333333",
            marginBottom: "8px",
            lineHeight: "1.4",
          }}
        >
          LinkedIn{" "}
          <span
            style={{
              color: "#d32f2f",
              marginLeft: "2px",
            }}
          >
            *
          </span>
        </label>
        <input
          type="url"
          value={data.linkedin}
          onChange={handleInputChange("linkedin")}
          placeholder="https://linkedin.com/in/username"
          style={{
            width: "100%",
            padding: "8px 12px",
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
            fontSize: "14px",
          }}
        />
      </div>

      {/* Location */}
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <label
          style={{
            display: "block",
            fontSize: "14px",
            fontWeight: "500",
            color: "#333333",
            marginBottom: "8px",
            lineHeight: "1.4",
          }}
        >
          Location
        </label>
        <input
          type="text"
          value={data.location}
          onChange={handleInputChange("location")}
          placeholder="City, State"
          style={{
            width: "100%",
            padding: "8px 12px",
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
            fontSize: "14px",
          }}
        />
      </div>
    </div>
  );
};

export default BasicsForm;
