import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  // State for form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState(""); // State for the role

  // Use navigate from react-router-dom to programmatically route
  const navigate = useNavigate();

  // Handle role change and navigate
  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);

    // Navigate based on the selected role
    if (selectedRole === "admin") {
      navigate("/admin-login"); // Navigate to Admin Component
    } else if (selectedRole === "") {
      navigate("/login");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Log the form data (or send it to an API)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Role:", role);

    // Navigate after successful registration
    navigate("/login"); // Redirect to login page after successful registration
  };

  return (
    <>
      <div className="container mt-5">
        <h2>User Register Form</h2>
        <form onSubmit={handleSubmit}>
          <table>
            <tr>
              <td>
                <label htmlFor="name">Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">Password:</label>
              </td>
              <td>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="confirmPassword">Confirm Password:</label>
              </td>
              <td>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="role">Role:</label>
              </td>
              <td>
                <select
                  id="role"
                  name="role"
                  value={role}
                  onChange={handleRoleChange} // Listen to role change
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit">Register</button>
              </td>
            </tr>
          </table>
        </form>
      </div>

      {/* Inline CSS Styles */}
      <style jsx>{`
        .container {
          background: #ffffff;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 20px;
          max-width: 400px;
          width: 90%;
        }

        h2 {
          text-align: center;
          color: #333;
          margin-bottom: 20px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        td {
          padding: 10px 0;
        }

        label {
          font-weight: bold;
          color: #555;
        }

        input,
        select {
          width: calc(100% - 20px);
          padding: 8px 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 14px;
          margin-top: 5px;
        }

        button {
          background: #4caf50;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 10px 15px;
          font-size: 16px;
          cursor: pointer;
          width: 100%;
          margin-top: 10px;
        }

        button:hover {
          background: #45a049;
        }
      `}</style>
    </>
  );
}
