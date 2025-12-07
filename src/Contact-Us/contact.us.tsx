import React, { useState } from 'react';
import axios from 'axios';  
import "../Contact-Us/test.css"

interface ContactUsProps {
    title: string;
}

const ContactUs: React.FC<ContactUsProps> = ({ title }) => {

    const [popupMessage, setPopupMessage] = useState(""); 

    const sendFormData = async (formData: any) => {
        return axios.post(
            "http://localhost:3002/contact-us",
            formData,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const fullName = (e.target as any).fullName.value;
        const mobile = (e.target as any).mobile.value;
        const email = (e.target as any).email.value;
        const details = (e.target as any).details.value;
        const budget = (e.target as any).budget.value;

        if (!fullName) {
            setPopupMessage("Please enter your full name.");
            return;
        }
        if (!mobile) {
            setPopupMessage("Please enter your mobile number.");
            return;
        }
        if (!email) {
            setPopupMessage("Please enter your email.");
            return;
        }
        if (!details) {
            setPopupMessage("Please enter details.");
            return;
        }
        if (!budget) {
            setPopupMessage("Please select your budget.");
            return;
        }

        const formData = { fullName, mobile, email, details, budget };

        try {
            const res = await sendFormData(formData);

            alert("Success: " + res.data);
            console.log(res.data);

        } catch (error: any) {
            if (error.response) {
                setPopupMessage("Server Error: " + error.response.data);
            } else if (error.message.includes("Network Error")) {
                setPopupMessage("CORS Error or Backend Down");
            } else {
                setPopupMessage("Error: " + error.message);
            }
        }
    };

    return (
        <div>
            {popupMessage && (
                <div style={popupContainerStyle}>
                    <div style={popupBoxStyle}>
                        <p>{popupMessage}</p>
                        <button onClick={() => setPopupMessage("")} style={popupButtonStyle}>
                            OK
                        </button>
                    </div>
                </div>
            )}

            <div>
                <form onSubmit={handleSubmit}> 

                    <label>Full Name:</label>
                    <input type="text" name="fullName" placeholder='Enter Name' />
                    <br />

                    <div>
                        <label>Mobile Number:</label>
                        <input type="number" name="mobile" placeholder='Enter Number' />
                    </div>

                    <label>Email:</label>
                    <input type="email" name="email" placeholder='Enter Email' />
                    <br />

                    <label>Details:</label>
                    <input type="text" name="details" placeholder='Enter message' />
                    <br />

                    <label>Budget:</label>
                    <select name="budget">
                        <option value="">Select:</option>
                        <option value="100-200">$100-200</option>
                        <option value="200-300">$200-300</option>
                        <option value="300-400">$300-400</option>
                        <option value="400-500">$400-500</option>
                    </select>
                    <br />

                    <div>
                        <button type="submit">Submit</button>
                        <button type="reset">Cancel</button>
                    </div>

                </form>
            </div>

            <div>
                <h1>{title}</h1>
            </div>
        </div>
    );
};

export default ContactUs;

const popupContainerStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000
};

const popupBoxStyle: React.CSSProperties = {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "10px",
    textAlign: "center",
    width: "300px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.3)"
};

const popupButtonStyle: React.CSSProperties = {
    marginTop: "15px",
    padding: "8px 20px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer"
};
