import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar"; // Sidebar component

export default function StaffList() {
  const [staff, setStaff] = useState([
    { name: "Om Shirudkar", role: "Owner(Boss)", status: "Active" },
    { name: "John Doe", role: "Manager", status: "Active" },
    { name: "Jane Smith", role: "Mechanic", status: "Active" },
    { name: "Mark Wilson", role: "Assistant", status: "Inactive" },
  ]);

  const [newStaff, setNewStaff] = useState({
    name: "",
    role: "",
    status: "Active", // Default status is Active
  });

  const [showAddForm, setShowAddForm] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStaff({ ...newStaff, [name]: value });
  };

  // Handle the addition of a new staff member
  const handleAddStaff = (e) => {
    e.preventDefault();
    setStaff([...staff, newStaff]); // Add new staff to the list
    setNewStaff({ name: "", role: "", status: "Active" }); // Reset the form
    setShowAddForm(false); // Hide the form after adding
  };

  // Handle delete staff
  const deleteStaff = (index) => {
    const updatedStaff = staff.filter((_, i) => i !== index);
    setStaff(updatedStaff);
  };

  // Toggle sidebar visibility
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

      {/* Main Content */}
      <div style={styles.mainContent}>
        <h2>Staff Management</h2>
        <button
          className="btn btn-primary mb-3"
          onClick={() => setShowAddForm(true)}
        >
          Add New Staff
        </button>

        {showAddForm && (
          <form onSubmit={handleAddStaff} style={styles.form}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={newStaff.name}
                onChange={handleInputChange}
                required
                style={styles.input}
              />
            </div>
            <div>
              <label>Role:</label>
              <input
                type="text"
                name="role"
                value={newStaff.role}
                onChange={handleInputChange}
                required
                style={styles.input}
              />
            </div>
            <div>
              <label>Status:</label>
              <select
                name="status"
                value={newStaff.status}
                onChange={handleInputChange}
                required
                style={styles.input}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div>
              <button type="submit" className="btn btn-success">
                Add Staff
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowAddForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <table className="table table-bordered" style={styles.table}>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((member, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{member.name}</td>
                <td>{member.role}</td>
                <td>{member.status}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteStaff(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex", // Flexbox to align sidebar and main content side-by-side
    height: "100vh", // Ensure full height of the screen
  },
  toggleButton: {
    position: "absolute",
    top: "20px",
    left: "20px",
    zIndex: "1050", // Ensure the button appears above everything else
  },
  mainContent: {
    flex: 1, // Main content takes up remaining space after sidebar
    padding: "20px",
    marginLeft: "0px", // Adjust margin for open sidebar
    transition: "margin-left 0.3s ease", // Smooth transition for content shift
  },
  table: {
    width: "100%",
    marginTop: "20px",
  },
  form: {
    marginTop: "20px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
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
    top: "10px",
  },
};
