import React, { useState } from "react";

export default function AcceptRequestForm() {
  const [formDetails, setFormDetails] = useState({
    customerName: "",
    contactNumber: "",
    serviceType: "",
    additionalNotes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const acceptRequest = () => {
    const { customerName, contactNumber, serviceType, additionalNotes } =
      formDetails;

    if (
      !customerName.trim() ||
      !contactNumber.trim() ||
      !serviceType.trim()
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    alert(`
      Request Details:
      - Customer Name: ${customerName}
      - Contact Number: ${contactNumber}
      - Service Type: ${serviceType}
      - Additional Notes: ${additionalNotes || "N/A"}
      \nThe request has been accepted!
    `);

    // Reset form fields
    setFormDetails({
      customerName: "",
      contactNumber: "",
      serviceType: "",
      additionalNotes: "",
    });
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
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "500px",
    margin: "50px auto",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontSize: "16px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
