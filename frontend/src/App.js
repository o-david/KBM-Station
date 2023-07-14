import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Dictionary from "./screens/Dictionary/Dictionary";
import Signup from "./screens/Signup_Login/SignupScreen";
import Login from "./screens/Signup_Login/LoginScreen";
import Profile from "./screens/ProfileScreen/ProfileScreen";
import Dashboard from "./screens/Dashboard/Dashboard";
import Discussion from "./screens/Discussion/Discussion";
// import LetterScreen from "./screens/ProfileScreen/ProfileScreen";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/dictionary/*" element={<Dictionary />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/home/*" element={<Discussion />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
