import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h4 style={styles.columnTitle}>Garage Services</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <a href="/" style={styles.link}>
                Our Services
              </a>
            </li>
            <li style={styles.listItem}>
              <a href="/about" style={styles.link}>
                About Us
              </a>
            </li>
            <li style={styles.listItem}>
              <a href="/contact" style={styles.link}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div style={styles.column}>
          <h4 style={styles.columnTitle}>Contact Information</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <strong>Phone:</strong>{" "}
              <a href="tel:+1234567890" style={styles.link}>
                8080056951
              </a>
            </li>
            <li style={styles.listItem}>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@garage.com" style={styles.link}>
                urjaautomotive@gmail.com
              </a>
            </li>
            <li style={styles.listItem}>
              <strong>Address:</strong> Pachwati, Sri Ram Nagar, Konark Nagar,
              Nashik, Maharashtra 422006
            </li>
          </ul>
        </div>

        <div style={styles.column}>
          <h4 style={styles.columnTitle}>Follow Us</h4>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" style={styles.socialIcon}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" style={styles.socialIcon}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" style={styles.socialIcon}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://youtube.com" style={styles.socialIcon}>
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div style={styles.bottom}>
        <p style={styles.copyRight}>
          © 2024 Garage Services. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#224",
    color: "#fff",
    paddingTop: "50px",
    paddingBottom: "10px",
    fontFamily: "Arial, sans-serif",
    marginTop: "50px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "0 20px",
  },
  column: {
    width: "30%",
    marginBottom: "20px",
  },
  columnTitle: {
    fontSize: "18px",
    marginBottom: "15px",
    color: "#ffb400",
  },
  list: {
    listStyle: "none",
    paddingLeft: "0",
  },
  listItem: {
    marginBottom: "10px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  linkHover: {
    color: "#ffb400",
  },
  socialIcons: {
    display: "flex",
    gap: "15px",
    marginTop: "10px",
  },
  socialIcon: {
    fontSize: "24px",
    color: "#fff",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  socialIconHover: {
    color: "#ffb400",
  },
  bottom: {
    textAlign: "center",
    marginTop: "20px",
  },
  copyRight: {
    fontSize: "14px",
    color: "#bbb",
  },
};

export default Footer;
