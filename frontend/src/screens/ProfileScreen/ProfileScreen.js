import React, { useEffect, useState } from "react";
import axios from "axios";
import "./profile.css";
import Recent from "./Recent";
import { Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import {CiLocationOn} from "react-icons/ci"
const ProfileScreen = ({ userId }) => {
  

  return (
    <div className="profile-screen">
      <div className="profile-container">
        <div className="box-image"></div>
        <img
          className="profile-image"
          src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
          alt="Profile"
        />
        <span className="profile-type">Student</span>
      </div>

      <div className="details">
        <div className="name-location">
          <div style={{border:"black solid 1px", padding:"16px",display:"flex", gap:"64px"}}>
            <span style={{fontSize: "20px",fontWeight: 600,letterSpacing: "0.2px",}}>Eniola Rachael</span>
            <span style={{fontSize: "18px",fontWeight: 400,letterSpacing: "0.09px",}}>@raejay</span>
          </div>
          <span  style={{fontSize: "18px",fontWeight: 400,letterSpacing: "0.09px",}}>Basic Class</span>
          <span style={{fontSize: "14px",fontWeight: 400,letterSpacing: "0.14px",}}><CiLocationOn/>Abuja, Federal Capital Territory, Nigeria</span>
        </div>
        <div>
          <p> </p>
        </div>
      </div>

      {
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/recent" element={<Recent />} />
        </Routes>
      }
      {/* {lastSeen ? (
        <p>Last seen: {lastSeen.toLocaleString()}</p>
      ) : (
        <p>Loading...</p>
      )} */}
    </div>
  );
};

export default ProfileScreen;
