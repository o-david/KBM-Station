import React from "react";
import { Route, Routes } from "react-router-dom";
import Community from "./Community";
import Student from "./Student";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <div>
          <h1>Admin Dashboard</h1>
          <input type={"text"} />
          <div>
            <span>Sort</span>
          </div>
          <div>
            <span>Filter</span>
          </div>
        </div>
        <div>
          <span>Student</span>
          <span>Tutor</span>
        </div>
        {
          <Routes>
            <Route path="/" element={<Student />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        }
      </div>

      <div></div>
    </div>
  );
};

export default Dashboard;
