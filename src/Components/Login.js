import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Role:", role);

    if (role === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Login as</label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit">Login</button>
        </form>

        <div className="extra-links">
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
        </div>

        <div className="extra-links">
          <p>
            Don't have an account? <Link to="/register">Register Here</Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 400px;
          margin: 80px auto;
          padding: 40px;
          background: linear-gradient(145deg, #ffffff, #f3f4f6);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
          border-radius: 16px;
          font-family: "Poppins", sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 28px;
          color: #2c3e50;
          margin-bottom: 30px;
          font-weight: bold;
        }

        .form-group {
          text-align: left;
          margin-bottom: 20px;
        }

        label {
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: #555555;
          margin-bottom: 8px;
        }

        input,
        select {
          width: 100%;
          padding: 12px;
          border: 1px solid #e1e1e1;
          border-radius: 8px;
          font-size: 14px;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }

        input:focus,
        select:focus {
          border-color: #4a90e2;
          box-shadow: 0 0 6px rgba(74, 144, 226, 0.5);
        }

        button {
          width: 100%;
          padding: 14px 20px;
          font-size: 16px;
          font-weight: bold;
          color: white;
          background: linear-gradient(135deg, #4a90e2, #007aff);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
          margin-top: 20px;
        }

        button:hover {
          background: linear-gradient(135deg, #007aff, #0056b3);
          transform: translateY(-2px);
        }

        button:active {
          background: #0056b3;
          transform: translateY(0);
        }

        .extra-links {
          margin-top: 15px;
        }

        .forgot-password {
          font-size: 14px;
          color: #4a90e2;
          text-decoration: none;
        }

        .forgot-password:hover {
          text-decoration: underline;
        }

        .extra-links p {
          font-size: 14px;
          color: #555555;
        }

        .extra-links a {
          font-size: 14px;
          color: #4a90e2;
          text-decoration: none;
          font-weight: 600;
        }

        .extra-links a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .container {
            padding: 20px;
          }

          h2 {
            font-size: 24px;
          }

          input,
          select {
            font-size: 14px;
            padding: 10px;
          }

          button {
            font-size: 14px;
            padding: 12px;
          }
        }
      `}</style>
    </>
  );
}
