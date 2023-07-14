import React from "react";
import { Link } from "react-router-dom";
import { HiOutlinePencil } from "react-icons/hi";

const Profile = () => {
  return (
    <div>
      <div className="navbar">
        <Link to={"/profile"} style={{ textDecoration: "none" }}>
          <span className="options" id="selected">
            Profile
          </span>
        </Link>
        <Link to={"/profile/recent"} style={{ textDecoration: "none" }}>
          <span className="options">Recent Activities</span>
        </Link>
      </div>
      <div className="p-section">
      <div className="p-box">
        <div className="p-box-icon" style={{backgroundColor: "#DFF6FF", color: "rgba(91, 185, 220, 1)",}}>
          <HiOutlinePencil />
        </div>
        <div>
          <p>0</p>
          <p>Replies</p>
        </div>
      </div>
      <div className="p-box">
        <div className="p-box-icon" style={{backgroundColor: "rgba(224, 234, 255, 1)", color: "rgba(86, 125, 190, 1)",}}>
            <HiOutlinePencil />
          </div>
        <div>
          <p>0</p>
          <p>Liked</p>
        </div>
      </div>
      <div className="p-box">
      <div className="p-box-icon" style={{backgroundColor: "rgba(248, 237, 173, 1)", color: "rgba(232, 170, 29, 1)",}}>
          <HiOutlinePencil />
        </div>
        <div>
          <p>0</p>
          <p>Comments</p>
        </div>
      </div>
      <div className="p-box">
        <div className="p-box-icon" style={{backgroundColor: "rgba(246, 225, 255, 1)", color: "rgba(205, 138, 239, 1)",}}>
          <HiOutlinePencil />
        </div>
        <div>
          <p>0</p>
          <p>Questions</p>
        </div>
      </div>
      <div className="p-box">
        <div className="p-box-icon" style={{backgroundColor: "rgba(196, 240, 243, 1)", color: "rgba(56, 169, 196, 1)",}}>
          <HiOutlinePencil />
        </div>
        <div>
          <p>0</p>
          <p>Recieved Likes</p>
        </div>
      </div>
      <div className="p-box">
        <div className="p-box-icon" style={{backgroundColor: "rgba(255, 236, 232, 1)", color: "rgba(248, 81, 81, 1)",}}>
          <HiOutlinePencil />
        </div>
        <div>
          <p>0</p>
          <p>Recieved Dislikes</p>
        </div>
      </div>
      <div className="p-box">
        <div className="p-box-icon" style={{backgroundColor: "rgba(228, 255, 202, 1)", color: "rgba(151, 208, 96, 1)",}}>
          <HiOutlinePencil />
        </div>
        <div>
          <p>0</p>
          <p>Answers</p>
        </div>
      </div>
      <div className="p-box">
        <div className="p-box-icon" style={{backgroundColor: "rgba(223, 253, 232, 1)", color: "rgba(120, 203, 144, 1)",}}>
          <HiOutlinePencil />
        </div>
        <div>
          <p>0</p>
          <p>Ratings</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Profile;
