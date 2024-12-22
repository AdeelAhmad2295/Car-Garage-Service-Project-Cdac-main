import React, { useState } from "react";

// Car Wash Component
function CarWash() {
  // State Hooks for tracking form inputs
  const [serviceType, setServiceType] = useState("");
  const [vehicleInfo, setVehicleInfo] = useState({
    make: "",
    model: "",
    year: "",
    plate: "",
  });
  const [images, setImages] = useState([]);
  const [estimate, setEstimate] = useState(null);
  const [booking, setBooking] = useState({
    date: "",
    time: "",
  });

  // Handling form change for vehicle info
  const handleVehicleChange = (e) => {
    const { name, value } = e.target;
    setVehicleInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Handling service selection
  const handleServiceChange = (e) => {
    setServiceType(e.target.value);
    console.log("Service Type Changed: ", e.target.value); // Debugging log to check serviceType
  };

  // Handling file upload
  const handleImageUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setImages(uploadedFiles);
  };

  // Handling estimate submission
  const getEstimate = () => {
    console.log("getEstimate function triggered!");
    console.log("Selected Service Type:", serviceType); // Debugging log to check serviceType

    if (serviceType) {
      let cost;
      let time;
      // Estimate based on selected service
      if (serviceType === "basic") {
        cost = 300;
        time = "1-2 hours";
      } else if (serviceType === "premium") {
        cost = 600;
        time = "2-3 hours";
      } else if (serviceType === "deluxe") {
        cost = 1000;
        time = "3-4 hours";
      } else {
        cost = 0;
        time = "Unknown";
      }

      console.log("Calculated Estimate:", { cost, time }); // Debugging log for calculated estimate

      // Update state for estimate
      setEstimate({ cost, time });
    } else {
      // Handle case when no service is selected
      setEstimate({ cost: 0, time: "Please select a service" });
    }
  };

  // Handling booking form submission
  const handleBooking = (e) => {
    e.preventDefault();
    console.log("Booking details:", booking);
    alert("Booking confirmed!");
  };

  return (
    <div className="container">
      {/* Service Selection */}
      <div className="service-selection">
        <h2>Select Your Car Wash Service</h2>
        <select value={serviceType} onChange={handleServiceChange}>
          <option value="">--Select Service--</option>
          <option value="basic">Basic Wash</option>
          <option value="premium">Premium Wash</option>
          <option value="deluxe">Deluxe Wash</option>
        </select>
        <button onClick={getEstimate}>Get Estimate</button>
      </div>

      {/* Vehicle Information Form */}
      <div className="vehicle-info">
        <h2>Vehicle Information</h2>
        <input
          type="text"
          name="make"
          placeholder="Car Company"
          value={vehicleInfo.make}
          onChange={handleVehicleChange}
        />
        <input
          type="text"
          name="model"
          placeholder="Car Model"
          value={vehicleInfo.model}
          onChange={handleVehicleChange}
        />
        <input
          type="number"
          name="year"
          placeholder="Car Year"
          value={vehicleInfo.year}
          onChange={handleVehicleChange}
        />
        <input
          type="text"
          name="plate"
          placeholder="License Plate"
          value={vehicleInfo.plate}
          onChange={handleVehicleChange}
        />
      </div>

      {/* Image Upload Section */}
      <div className="image-upload">
        <h2>Upload Vehicle Images</h2>
        <input type="file" multiple onChange={handleImageUpload} />
      </div>

      {/* Estimate Section */}
      {estimate && (
        <div className="estimate">
          <h2>Estimated Cost & Timeline</h2>
          <p>Cost: ₹ {estimate.cost}</p>
          <p>Estimated Time: {estimate.time}</p>
        </div>
      )}

      {/* Booking Form */}
      <div className="booking">
        <h2>Book Your Service</h2>
        <form onSubmit={handleBooking}>
          <input
            type="date"
            value={booking.date}
            onChange={(e) => setBooking({ ...booking, date: e.target.value })}
            required
          />
          <input
            type="time"
            value={booking.time}
            onChange={(e) => setBooking({ ...booking, time: e.target.value })}
            required
          />
          <button type="submit">Confirm Booking</button>
        </form>
      </div>

      <style jsx="true">{`
        .container {
          font-family: Arial, sans-serif;
          padding: 20px;
          margin: auto;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 20px;
          max-width: 800px;
        }

        .service-selection,
        .vehicle-info,
        .image-upload,
        .estimate,
        .booking {
          margin-bottom: 20px;
        }

        input[type="text"],
        input[type="number"],
        input[type="file"],
        select,
        input[type="date"],
        input[type="time"] {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        button {
          padding: 10px 20px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background-color: #45a049;
        }

        h2 {
          font-size: 1.5em;
          color: #333;
        }
      `}</style>
    </div>
  );
}

export default CarWash;
