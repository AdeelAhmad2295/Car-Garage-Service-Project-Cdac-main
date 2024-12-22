import React from "react";

export default function About() {
  return (
    <div className="about-section container">
      <style>
        {`
        .about-section {
          background-color: #f4f4f4;
          padding: 40px 20px;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          margin: 20px auto;
          font-family: 'Arial', sans-serif;
        }

        .about-section h3,
        .about-section h4 {
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .reviews-section .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .reviews-section .card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
        `}
      </style>

      {/* About Section */}
      <h3 className="text-center">About Us</h3>
      <p>
        Welcome to <strong>Urja Automobiles</strong>, your trusted partner in delivering top-notch
        automotive services and cutting-edge vehicle tracking solutions.
      </p>
      <p>
        At <strong>Urja Automobiles</strong>, we specialize in a wide range of services, including
        routine maintenance, emergency repairs, and advanced diagnostics.
      </p>

      <h4>Why Choose Us?</h4>
      <ul>
        <li><strong>Expert Team:</strong> Certified and experienced mechanics.</li>
        <li><strong>Advanced Technology:</strong> Real-time tracking and updates.</li>
        <li><strong>Customer-Centric Approach:</strong> Tailored solutions.</li>
        <li><strong>Eco-Friendly Practices:</strong> Sustainable methods.</li>
      </ul>

      {/* Reviews Section */}
      <div className="reviews-section mt-5">
        <h4 className="text-center mb-4">Customer Reviews</h4>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text">
                  "Fantastic service! My car runs like new again. Highly recommend Urja Automobiles."
                </p>
              </div>
              <div className="card-footer text-muted">
                <small>Rating: ★★★★★</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">Jane Smith</h5>
                <p className="card-text">
                  "Loved the transparent process and real-time updates. Great experience!"
                </p>
              </div>
              <div className="card-footer text-muted">
                <small>Rating: ★★★★★</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">Michael Lee</h5>
                <p className="card-text">
                  "Highly professional and courteous staff. My go-to place for car maintenance."
                </p>
              </div>
              <div className="card-footer text-muted">
                <small>Rating: ★★★★☆</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="feedback-form mt-5">
        <h4 className="text-center">Leave Your Feedback</h4>
        <form className="mt-3">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Your Feedback
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Share your thoughts with us"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
