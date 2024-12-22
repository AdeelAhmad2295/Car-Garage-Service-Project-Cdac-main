import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contactMethod: "Email",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Form submitted:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      contactMethod: "Email",
      service: "",
      message: "",
    });

    alert("Thank you for contacting us! We'll get back to you soon.");
  };

  const renderMessageWithLineBreaks = (message) => {
    return message.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <div className="container  ">
      
      <div className="contact-us-container">
        <style>{`
                .contact-us-container {
                    padding: 60px 0;
                    background-color: #f9f9f9;
                }

                .contact-info {
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    margin-bottom: 30px;
                }

                .contact-info h2 {
                    font-size: 28px;
                    color: #333;
                }

                .contact-info h4 {
                    font-size: 22px;
                    color: #555;
                    margin-top: 20px;
                }

                .contact-info p {
                    color: #666;
                    line-height: 1.6;
                }

                .contact-form {
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                }

                .contact-form h2 {
                    font-size: 28px;
                    color: #333;
                    margin-bottom: 20px;
                }

                .contact-form .form-label {
                    font-weight: bold;
                    color: #444;
                }

                .contact-form .form-control {
                    border-radius: 5px;
                    border: 1px solid #ddd;
                    box-shadow: none;
                    margin-bottom: 15px;
                    padding: 10px;
                }

                .contact-form .form-control:focus {
                    border-color: #007bff;
                    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.25);
                }

                .contact-form .form-select {
                    border-radius: 5px;
                    border: 1px solid #ddd;
                    margin-bottom: 15px;
                }

                .contact-form .btn-submit {
                    background-color: #007bff;
                    color: #fff;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    font-size: 16px;
                    cursor: pointer;
                    width: 100%;
                }

                .contact-form .btn-submit:hover {
                    background-color: #0056b3;
                }

                .social-icons {
                    display: flex;
                    gap: 10px;
                    margin-top: 10px;
                }

                .social-icon {
                    font-size: 24px;
                    text-decoration: none;
                }

                .social-icon:hover {
                    opacity: 0.7;
                }

                iframe {
                    width: 100%;
                    height: 300px;
                    border: 0;
                    border-radius: 8px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                }

                .contact-form label {
                    display: block;
                    margin-bottom: 5px;
                }

                .contact-form .form-check {
                    margin-bottom: 10px;
                }

                .form-check-label {
                    font-size: 16px;
                    color: #555;
                }

                .contact-form input[type="radio"] {
                    margin-right: 10px;
                }
            `}</style>

        <div className="row">
          {/* Left Column: Contact Info */}

          {/* Right Column: Contact Form */}
          <div className="col-mt-6 contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Preferred Contact Method</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="contactMethod"
                    value="Email"
                    checked={formData.contactMethod === "Email"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Email</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="contactMethod"
                    value="Phone"
                    checked={formData.contactMethod === "Phone"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Phone</label>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="service" className="form-label">
                  Service Request
                </label>
                <select
                  className="form-select"
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a Service
                  </option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Maintenance Request">
                    Maintenance Request
                  </option>
                  <option value="Emergency Repair">Emergency Repair</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-submit">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Google Map Embed (Optional) */}
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-12">
            <h4>Our Location</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              title="Garage Location"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
