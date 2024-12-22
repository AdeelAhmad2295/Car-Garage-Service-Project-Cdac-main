import React, { useState } from "react";

export default function AssignTask() {
  const [staffList] = useState([
    "John Doe",
    "Jane Smith",
    "Mark Wilson",
    "Alice Johnson",
  ]);

  const [task, setTask] = useState("");
  const [taskType, setTaskType] = useState("");
  const [assignedStaff, setAssignedStaff] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [carDetails, setCarDetails] = useState("");
  const [taskRecords, setTaskRecords] = useState([]); // Stores all task records

  const assignTask = () => {
    if (!task || !taskType || !assignedStaff || !deliveryTime || !carDetails) {
      alert("Please fill in all the fields before assigning the task.");
      return;
    }

    const newTask = {
      task,
      taskType,
      assignedStaff,
      carDetails,
      deliveryTime,
    };

    setTaskRecords([...taskRecords, newTask]); // Add the new task to the task records
    alert(`Task "${task}" has been assigned to ${assignedStaff}.`);

    // Clear the input fields
    setTask("");
    setTaskType("");
    setAssignedStaff("");
    setDeliveryTime("");
    setCarDetails("");
  };

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>Assign Task to Staff</h2>

      {/* Task Assignment Form */}
      <div style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Task Description</label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task description"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Task Type</label>
          <select
            value={taskType}
            onChange={(e) => setTaskType(e.target.value)}
            style={styles.input}
          >
            <option value="">Select task type</option>
            <option value="Car Washing">Car Washing</option>
            <option value="Car Repair">Car Repair</option>
            <option value="Oil Change">Oil Change</option>
            <option value="General Service">General Service</option>
          </select>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Assign to Staff</label>
          <select
            value={assignedStaff}
            onChange={(e) => setAssignedStaff(e.target.value)}
            style={styles.input}
          >
            <option value="">Select a staff member</option>
            {staffList.map((staff, index) => (
              <option key={index} value={staff}>
                {staff}
              </option>
            ))}
          </select>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Car Details</label>
          <input
            type="text"
            value={carDetails}
            onChange={(e) => setCarDetails(e.target.value)}
            placeholder="Enter car model or registration number"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Delivery Time</label>
          <input
            type="time"
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
            style={styles.input}
          />
        </div>

        <button onClick={assignTask} style={styles.button}>
          Assign Task
        </button>
      </div>

      {/* Task Records Table */}
      <h3 style={styles.heading}>Assigned Tasks</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Task Description</th>
            <th>Task Type</th>
            <th>Assigned Staff</th>
            <th>Car Details</th>
            <th>Delivery Time</th>
          </tr>
        </thead>
        <tbody>
          {taskRecords.length === 0 ? (
            <tr>
              <td colSpan="5" style={styles.noData}>
                No tasks assigned yet.
              </td>
            </tr>
          ) : (
            taskRecords.map((record, index) => (
              <tr key={index}>
                <td>{record.task}</td>
                <td>{record.taskType}</td>
                <td>{record.assignedStaff}</td>
                <td>{record.carDetails}</td>
                <td>{record.deliveryTime}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    marginBottom: "20px",
  },
  form: {
    marginBottom: "30px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "4px",
    fontSize: "16px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  tableHeader: {
    backgroundColor: "#007bff",
    color: "#fff",
    textAlign: "left",
  },
  noData: {
    textAlign: "center",
    fontStyle: "italic",
  },
};
