import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "./Header"; // Import the admin header

export default function AdminDash() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle the sidebar open or closed
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div style={styles.wrapper}>
      {/* Button to toggle sidebar */}
      <button
        className="btn btn-primary"
        onClick={toggleSidebar}
        style={styles.toggleButton}
      >
        {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>

      {/* Sidebar */}
      <div
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        style={{
          ...styles.sidebar,
          ...(isSidebarOpen ? styles.sidebarOpen : {}),
        }}
      >
        <div className="sidebar-header">
          <h3 style={styles.heading}>Admin Dashboard</h3>
          <button onClick={toggleSidebar} style={styles.closeButton}>
            ×
          </button>
        </div>
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

      {/* Content area */}
      <div style={styles.contentArea}>
        <AdminHeader />
        <div style={styles.container}>
          <h2>Welcome to the Admin Dashboard</h2>
          <p>This is where you can manage garage operations and staff.</p>
          <div style={styles.card}>
            <h4>Garage Overview</h4>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Garage Name</th>
                  <th>Status</th>
                  <th>Staff Assigned</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Garage A</td>
                  <td>Active</td>
                  <td>John, Jane</td>
                </tr>
                <tr>
                  <td>Garage B</td>
                  <td>Inactive</td>
                  <td>Mark</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    position: "relative",
  },
  toggleButton: {
    position: "absolute",
    top: "-5px",
    left: "20px",
    zIndex: "1050", // Ensure the button appears above everything else
  },
  contentArea: {
    width: "100%",
    padding: "20px",
    marginLeft: "0px", // Adjust margin for open sidebar
    transition: "margin-left 0.3s ease", // Smooth transition for content shift
  },
  container: {
    padding: "20px",
  },
  card: {
    marginTop: "20px",
    padding: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  sidebar: {
    position: "fixed",
    top: 0,
    left: "-250px", // Sidebar is initially hidden off-screen
    width: "250px",
    height: "100%",
    backgroundColor: "#333",
    color: "white",
    paddingTop: "20px",
    paddingLeft: "20px",
    transition: "transform 0.3s ease", // Smooth transition when opening/closing
    zIndex: 1000,
  },
  sidebarOpen: {
    transform: "translateX(250px)", // Sidebar slides in when open
  },
  heading: {
    color: "#fff",
    marginBottom: "20px",
    top:"-10px",
  },
  link: {
    color: "white",
    display: "block",
    padding: "10px",
    textDecoration: "none",
    marginBottom: "10px",
    transition: "background-color 0.3s",
  },
  closeButton: {
    color: "#fff",
    fontSize: "30px",
    background: "transparent",
    border: "none",
    position: "absolute",
    right: "10px",
    top: "-10px",
  },
};
