import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage_container">
      <div className="homepage_top">
        <div className="left">
          <img src="left-image.jpg" />
        </div>
        <div className="right">
          <p style={{ fontSize: "25px" }}>Where Technology Meets Vision</p>
          <p
            style={{ fontWeight: "lighter", color: "black", fontSize: "18px" }}
          >
            Let Us Help You Build, Secure and Accelerate Your Digital
            Transformation Journey. Unlocking Innovation, Enhancing Agility, and
            Empowering Growth for a Future-Ready Business.
          </p>
          <div className="explore-button"
          >
            <button
              style={{
                padding: "10px",
                borderRadius: "20px",
                border: "none",
                fontFamily: "var(--mainfont)",
                fontWeight:"bold",
                fontSize:"15px",
                backgroundColor:"#6c63ff",
                color:"white"
              }}
            >
              Explore about us
            </button>
          </div>
        </div>
        

      </div>

      <div className="homepage_mid">
        
      </div>
    </div>
  );
};

export default Homepage;
