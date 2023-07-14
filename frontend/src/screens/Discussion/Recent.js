import React from "react";
import { Link } from "react-router-dom";

const Recent = () => {
  return (
    <div>
      <div className="navbar">
        <Link to={"/profile"} style={{ textDecoration: "none" }}>
          <span className="options">Profile</span>
        </Link>
        <Link to={"/profile/recent"} style={{ textDecoration: "none" }}>
          <span className="options" id="selected">
            Recent Activities
          </span>
        </Link>
      </div>
      <div className="recent-tbar">
        <span className="recent-tbar-a">General Title</span>
        <span className="recent-tbar-b">Post </span>
        <span className="recent-tbar-c">Views</span>
      </div>
    </div>
  );
};

export default Recent;
