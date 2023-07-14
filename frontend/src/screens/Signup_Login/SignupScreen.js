import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup_Login.css";
import Logo from "../../logo.png";
import { CgProfile } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";
import Heading2 from "../../components/Header/Heading2";

const SignupScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [user_name, setUserName] = useState("");
  const [userType, setuserType] = useState("community");
  const [userState, setUserState] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [studentCode, setStudentCode] = useState(null);
  const [privacyPolicy, setPrivacyPolicy] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate("/dictionary");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    console.log(privacyPolicy)
    e.preventDefault();
    
    
    if(privacyPolicy==="on"){
      console.log("privacy policy Check")
      if (password !== confirmpassword) {
      console.log("password Check")
      setMessage("Passwords do not match");
    } else {
      if (userType === "student") {
        if (studentCode === "KBMROCKS") {
          dispatch(
            register(
              first_name,
              last_name,
              email,
              password,
              userType,
              userState,
              pic,
              phoneNumber
            )
          );
        } else {
          setMessage("Wrong Student Code");
        }
      } else
        dispatch(
          register(
            first_name,
            last_name,
            user_name,
            email,
            password,
            userType,
            userState,
            pic,
            phoneNumber
          )
        );
    }
  }else{
    setMessage("Please check terms and service");
  }
  };
  return (
    <div>
      <Heading2/> 
    <div className="reg-Log">
      <div className="navbar">
        <Link to={"/register"} style={{ textDecoration: "none" }}>
          <span className="options" id="selected">
            Register
          </span>
        </Link>
        <Link to={"/login"} style={{ textDecoration: "none" }}>
          <span className="options">Login</span>
        </Link>
      </div>
      <img src={Logo} alt="" />
      <h1>Create Account</h1>
      <form onSubmit={submitHandler}>
        <div id="nameInputs">
          <div className="nameInput input">
            <CgProfile />
            <input
              type={"text"}
              placeholder="Enter your first name"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="nameInput input">
            <CgProfile />
            <input
              type={"text"}
              placeholder="Enter your last name"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>
        <div className="input">
          <IoIosMail />
          <input
            type={"email"}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <IoIosMail />
          <input
            type={"text"}
            placeholder="Enter Username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="input">
          <FaPhoneAlt />
          <input
            type={"number"}
            placeholder="Enter your phone number"
            onChange={(e) => setPhoneNumber(e.target.value)}
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
        <div className="input">
          <RiLockPasswordFill />
          <input
            type={"password"}
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="input">
          <CgProfile />
          <select onChange={(e) => setuserType(e.target.value)}>
            <optgroup
              label="Are you a KBM student?"
              style={{ borderBottom: "1px black solid", color: "#1A181C" }}
            />
            <option defaultChecked value="community">
              I am not a KBM Student
            </option>
            <option value="student">I am a KBM Student</option>
          </select>
        </div>

        {userType && userType === "student" && (
          <div className="input">
            <RiLockPasswordFill />
            <input
              type={"password"}
              placeholder="Enter your student code"
              onChange={(e) => setStudentCode(e.target.value)}
            />
          </div>
        )}
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type={"checkbox"}
            onChange={(e) => setPrivacyPolicy(e.target.value)}
          />

          <p style={{ fontSize: "small" }}>
            By signing up, I agree to the{" "}
            <Link style={{ textDecoration: "none", color: "#ffa800" }}>
              Terms of Service and Privacy Policy
            </Link>
          </p>
        </div>
        {message && (
          <div className="input">
            <p>{message}</p>
          </div>
        )}

        <div className="submit-btn">
          <input type={"Submit"} />
        </div>
      </form>
    </div>
    </div>
  );
};

export default SignupScreen;
