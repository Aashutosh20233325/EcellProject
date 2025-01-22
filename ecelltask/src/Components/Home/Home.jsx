import React from "react";
import "./Home.css"; // Make sure to include styles in your CSS file
import profile_photo from '../Assets/profile_photo.jpeg'
import avtar from '../Assets/avtar.png'

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <div className="profile">
          <img src={profile_photo} alt="profile photo" />
        </div>
        <h2 style={styles.subtitle}>Welcome, To My Profile</h2>
        <div style={styles.introDetails}>
          <p style={styles.detail}>Name: Aashutosh Kumar</p>
          <p style={styles.detail}>Player Number: 20233325</p>
          <a
            href="https://www.linkedin.com/in/aashutosh-kumar-9684b0348/"
            style={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact: @Aashutosh
          </a>
        </div>
        <a href="https://github.com/Aashutosh20233325?tab=repositories" target="_blank" rel="noopener noreferrer">
          <button style={styles.button}>Explore Now</button>
        </a>
      </div>
      <div style={styles.rightSection}>
        <div className="avatar-container">
          <img
            src={avtar}
            alt="Your Avatar"
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#1b1b1b",
    color: "#ffffff",
    fontFamily: "'Poppins', sans-serif",
  },
  leftSection: {
    flex: 1,
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  rightSection: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(45deg, #ff003c, #60002c)",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "2rem",
    margin: "10px 0 20px",
  },
  introDetails: {
    marginBottom: "20px",
  },
  detail: {
    fontSize: "1.2rem",
    margin: "5px 0",
  },
  link: {
    color: "#ff003c",
    textDecoration: "none",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#ff003c",
    border: "none",
    color: "#fff",
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none", // Make sure the link text doesn't show underline
    display: "inline-block",
    marginTop: "20px",
    transition: "background-color 0.3s ease",
  },
};

export default Home;
