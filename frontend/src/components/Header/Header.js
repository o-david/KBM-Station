import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../logo.png";
import { logout } from "../../actions/userActions";
import "./Header.css";
import { HiHome } from "react-icons/hi";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();


  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const out = () => {
    dispatch(logout())
    window.location.href = "/register";
  };
  const reg = () => {
    window.location.href = "/register";
  };
  const profile = () => {
    window.location.href = "/profile";
  };
  const home = () => {
    window.location.href = "/home";
  };

  return (
    <header>
        <img src={Logo} alt="" onClick={home} />
      <nav>
        <ul>
          <li>Home</li>
          <li>Training</li>
          <li>Blog</li>
          <li>Resources</li>
          <li>About</li>
          {userInfo ? (
            <div
              className="dropdown"
              onMouseEnter={handleToggle}
              onMouseLeave={handleToggle}
            >
              <img src={userInfo.pic} alt="Profile" class="dropdown-icon" />
              {isOpen && (
                <div className="dropdown-menu">
                  <ul>
                    <li onClick={profile}>Profile</li>
                    <li onClick={out}>Logout</li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <li onClick={reg}>Sign Up</li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
