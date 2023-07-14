import React from "react";
import { BiImage } from "react-icons/bi";
import { Link } from "react-router-dom";

const Questions = () => {
  return (
    <div>
      <div className="navbar">
        <Link to={"/profile"} style={{ textDecoration: "none" }}>
          <span className="options">Posts</span>
        </Link>
        <Link to={"/profile/recent"} style={{ textDecoration: "none" }}>
          <span className="options" id="selected">
            Questions
          </span>
        </Link>
      </div>
      <div>
            <div className="user-tag">
                <img           
                src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                alt="image here"/>
                <p>You</p>
            </div>
      
            <div className="ask">
                <input type="text" placeholder="Whats Your Question?"/>
                <BiImage/>
            </div>
        
      </div>
    </div>
  );
};

export default Questions;
