import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { HiOutlinePencil } from "react-icons/hi";
import "./discussion.css";
import Union from "./Union.png"
import Forum from "./Forum";
import Recent from "./Recent";
import Questions from "./Questions";

const Discussion = () => {
const users = 5000;

  return (
    <div className="discussion">
      <div className="posts">
      {
        <Routes>
          <Route path="/" element={<Questions />} />
          <Route path="/forum" element={<Forum />} />

        </Routes>
      }
      </div>
      <div className="users">
        <div className="users-top">
            <div className="users-top-left">
                <p>Number of users</p>
                <h1>{users}</h1>
            </div>
            <div>
                <img src={Union} alt=""/>
            </div>
        </div>
        <div className="users-bottom">
            <h1>Forum Members</h1>
            <h2>Admin</h2>
            <div className="user-tag">
                <img           
                src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                alt="image here"/>
                <p>Adebimpe Babatunde</p>
            </div>
            <h2>Students</h2>
            <div className="user-tag">
                <img           
                src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                alt="image here"/>
                <p>Adebimpe Babatunde</p>
            </div>
            <div className="user-tag">
                <img           
                src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                alt="image here"/>
                <p>Adebimpe Babatunde</p>
            </div>
            <div className="user-tag">
                <img           
                src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                alt="image here"/>
                <p>Adebimpe Babatunde</p>
            </div>
            <div className="user-tag">
                <img           
                src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                alt="image here"/>
                <p>Adebimpe Babatunde</p>
            </div>
            <h2>Community</h2>
            <div className="user-tag">
                <img           
                src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                alt="image here"/>
                <p>Adebimpe Babatunde</p>
            </div>
            <div className="user-tag">
                <img           
                src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                alt="image here"/>
                <p>Adebimpe Babatunde</p>
            </div>
            <div className="user-tag">
                <img           
                src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                alt="image here"/>
                <p>Adebimpe Babatunde</p>
            </div>
            <div className="user-tag">
                <img           
                src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                alt="image here"/>
                <p>Adebimpe Babatunde</p>
            </div>

        </div>

      </div>
    </div>
  );
};

export default Discussion;
