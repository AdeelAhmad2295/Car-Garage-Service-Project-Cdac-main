import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {



  // State for form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const navigate = useNavigate();
  


  // Handle form submission
   const handleSubmit = (e) => {
     e.preventDefault();

     // Here you can add logic to handle the login process, e.g., sending data to an API
     console.log("Email:", email);
     console.log("Password:", password);

     // After successful login, navigate to the home page
     navigate("/"); // Redirect to home page after login
   };

  return (
    <>
      <div className="container mt-5">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <table>
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
              <td colSpan="2">
                <button type="submit">Login</button>
              </td>
            </tr>
          </table>
        </form>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>

        {/* Registration Link */}
        <div className="register-link">
          <p>
            Don't have an account? <Link to="/register">Register Here</Link>
          </p>
        </div>
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

        input {
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

        .forgot-password {
          text-align: center;
          margin-top: 10px;
        }

        .forgot-password a {
          color: #007bff;
          text-decoration: none;
        }

        .forgot-password a:hover {
          text-decoration: underline;
        }

        .register-link {
          text-align: center;
          margin-top: 10px;
        }

        .register-link a {
          color: #007bff;
          text-decoration: none;
        }

        .register-link a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
