import React, { useEffect, useState } from "react";
import axios from "axios";

interface ContactUsProps {
  title: string;
  goBack: () => void;
}

const ContactUs: React.FC<ContactUsProps> = ({ title, goBack }) => {
  const [popupMessage, setPopupMessage] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
 useEffect(() => {
    document.title = 'Innovatech Solutions - Contact Us';
  }, []);
  const sendFormData = async (data: any) => {
    return axios.post("http://localhost:3002/contact-us", data, {
      headers: { "Content-Type": "application/json" },
    });
  };

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(
      "http://localhost:3002/upload-file",
      formData
    );

    setUploadedFileName(res.data.fileName);
  };

  const savenewlead = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget as any;

    const fullName = target.fullName.value;
    const countryCode = target.countryCode.value;
    const mobile = target.mobile.value;
    const email = target.email.value;
    const details = target.details.value;
    const file = target.file?.files[0];

    if (!fullName) return setPopupMessage("Please enter your full name.");
    if (!mobile) return setPopupMessage("Please enter your mobile number.");
    if (!email) return setPopupMessage("Please enter your email.");
    if (!details) return setPopupMessage("Please enter details.");

    try {
      if (file && !uploadedFileName) {
        await uploadFile(file);
      }

      await sendFormData({
        fullName,
        mobile: `${countryCode}${mobile}`,
        email,
        details,
        fileName: uploadedFileName,
      });

      setPopupMessage("Form submitted successfully!");
      target.reset();
      setUploadedFileName(null);
    } catch {
      setPopupMessage("Server error. Please try again later.");
    }
  };

  return (
    <div style={pageStyle}>
      {popupMessage && (
        <div style={popupOverlay}>
          <div style={popupBox}>
            <p>{popupMessage}</p>
            <button onClick={() => setPopupMessage("")} style={popupButton}>
              OK
            </button>
          </div>
        </div>
      )}

      <form onSubmit={savenewlead} style={formStyle}>
             <button type="button" onClick={goBack} style={backBtn}>
          ⬅ Back
        </button>

        <h2 style={titleStyle}>{title}</h2>

        <input style={inputStyle} type="text" name="fullName" placeholder="Full Name" />

        <div style={mobileRow}>
          <select name="countryCode" style={selectStyle}>
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+61">+61</option>
          </select>

          <input
            style={inputStyle}
            type="number"
            name="mobile"
            placeholder="Mobile Number"
          />
        </div>

        <input
          style={inputStyle}
          type="email"
          name="email"
          placeholder="Email Address"
        />

        <textarea
          style={textareaStyle}
          name="details"
          placeholder="Your Message"
        />

        <input type="file" name="file" />

        <div style={buttonRow}>
          <button type="submit" style={submitBtn}>
            Submit
          </button>
          <button type="reset" style={cancelBtn}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;

/* ================= STYLES ================= */

const pageStyle: React.CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f4f6f8",
};

const formStyle: React.CSSProperties = {
  background: "#ffffff",
  padding: "30px",
  width: "380px",
  borderRadius: "10px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  position: "relative",
};

const titleStyle: React.CSSProperties = {
  textAlign: "center",
};

const backBtn: React.CSSProperties = {
  position: "absolute",
  top: "15px",
  left: "15px",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  fontSize: "14px",
};

const inputStyle: React.CSSProperties = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  width: "100%",
};

const textareaStyle: React.CSSProperties = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  height: "80px",
  resize: "none",
};

const mobileRow: React.CSSProperties = {
  display: "flex",
  gap: "10px",
};

const selectStyle: React.CSSProperties = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const buttonRow: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
};

const submitBtn: React.CSSProperties = {
  background: "#007bff",
  color: "#ffffff",
  border: "none",
  padding: "10px 20px",
  borderRadius: "6px",
  cursor: "pointer",
};

const cancelBtn: React.CSSProperties = {
  background: "#6c757d",
  color: "#ffffff",
  border: "none",
  padding: "10px 20px",
  borderRadius: "6px",
  cursor: "pointer",
};

const popupOverlay: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const popupBox: React.CSSProperties = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
};

const popupButton: React.CSSProperties = {
  marginTop: "10px",
  padding: "8px 16px",
  background: "#007bff",
  color: "#ffffff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
