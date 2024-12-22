import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h3 style={styles.heading}>Admin Dashboard</h3>
      <ul className="list-unstyled">
        <li>
          <Link to="/admin-dashboard" style={styles.link}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/staff" style={styles.link}>
            Staff Management
          </Link>
        </li>
        <li>
          <Link to="/assign-task" style={styles.link}>
            Assign Tasks
          </Link>
        </li>
        <li>
          <Link to="/accept-request" style={styles.link}>
            Accept Requests
          </Link>
        </li>
      </ul>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "20%",
    backgroundColor: "#333",
    height: "100vh",
    color: "white",
    paddingTop: "20px",
    paddingLeft: "20px",
  },
  heading: {
    color: "#fff",
  },
  link: {
    color: "white",
    display: "block",
    padding: "10px",
    textDecoration: "none",
    marginBottom: "10px",
  },
};
