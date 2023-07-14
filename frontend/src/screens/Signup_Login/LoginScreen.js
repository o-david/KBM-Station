import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Signup_Login.css";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Logo from "../../logo.png";
import { login } from "../../actions/userActions";
import Heading2 from "../../components/Header/Heading2";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/dictionary");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <Heading2/>
    <div className="reg-Log">
      <div className="navbar">
        <Link to={"/register"} style={{ textDecoration: "none" }}>
          <span className="options">Register</span>
        </Link>
        <Link to={"/login"} style={{ textDecoration: "none" }}>
          <span className="options" id="selected">
            Login
          </span>
        </Link>
      </div>
      <img src={Logo} alt="" />
      <h1>Welcome Back</h1>
      <form onSubmit={submitHandler}>
        <div className="input">
          <IoIosMail />
          <input
            type={"email"}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <RiLockPasswordFill />
          <input
            type={"password"}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="submit-btn">
          <input type={"Submit"} />
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoginScreen;
