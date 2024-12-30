import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import { Link } from "react-router-dom"; 

export default function AcceptRequest() {
  const [formDetails, setFormDetails] = useState({
    customerName: "",
    contactNumber: "",
    serviceType: "",
    additionalNotes: "",
  });

  const navigate = useNavigate(); // For navigating to CustomerViewService

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const acceptRequest = () => {
    const { customerName, contactNumber, serviceType, additionalNotes } = formDetails;

    if (!customerName.trim() || !contactNumber.trim() || !serviceType.trim()) {
      alert("Please fill out all required fields.");
      return;
    }

    // Logic for accepting the request can include sending the request to the server

    // Reset form fields
    setFormDetails({
      customerName: "",
      contactNumber: "",
      serviceType: "",
      additionalNotes: "",
    });

    alert("Request accepted!");
  };

  return (
    <div style={styles.container}>
      <h2>Garage Service Request Form</h2>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Customer Name</label>
        <input
          type="text"
          name="customerName"
          value={formDetails.customerName}
          onChange={handleInputChange}
          placeholder="Enter customer's name"
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Contact Number</label>
        <input
          type="tel"
          name="contactNumber"
          value={formDetails.contactNumber}
          onChange={handleInputChange}
          placeholder="Enter contact number"
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Service Type</label>
        <input
          type="text"
          name="serviceType"
          value={formDetails.serviceType}
          onChange={handleInputChange}
          placeholder="Enter type of service"
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Additional Notes</label>
        <textarea
          name="additionalNotes"
          value={formDetails.additionalNotes}
          onChange={handleInputChange}
          placeholder="Enter any additional notes (optional)"
          style={{ ...styles.input, height: "100px" }}
        />
      </div>
      <button onClick={acceptRequest} style={styles.button}>
        Accept Request
      </button>

      <Link to="/admin-dashboard" style={styles.backButton}>
        Back to Dashboard
      </Link>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "500px",
    margin: "50px auto",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
    textAlign: "center",
    fontFamily: "'Roboto', sans-serif",
  },
  inputGroup: {
    marginBottom: "20px",
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontSize: "15px",
    fontWeight: "600",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "14px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    backgroundColor: "#f9f9f9",
    outline: "none",
    transition: "border-color 0.3s",
  },
  button: {
    padding: "12px 20px",
    fontSize: "16px",
    fontWeight: "600",
    backgroundColor: "#007bff",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  backButton: {
    display: "inline-block",
    padding: "12px 20px",
    fontSize: "16px",
    fontWeight: "600",
    backgroundColor: "#28a745",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "8px",
    marginTop: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};
