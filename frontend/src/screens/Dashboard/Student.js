import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
const Student = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com" },
    // Add more user objects as needed
  ];
  return (
    <div>
      <div className="dash">
        <div>
          <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
            <span className="options" id="selected">
              Student
            </span>
          </Link>
          <Link to={"/dashboard/community"} style={{ textDecoration: "none" }}>
            <span className="options">Community</span>
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th className="column-name">Name</th>
              <th className="column-code">Code</th>
              <th className="column-class">class</th>
              <th className="column-gender">Gender</th>
              <th className="column-email">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.code}</td>
                <td>{user.class}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Student;
