import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./LandingPage.css";
import AllWords from "./AllWords";
import Search from "./Search";
import Letters from "./Letters";
import Heading from "../../components/Header/Heading";

const Dictionary = () => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  console.log(alphabet);

  const handleChange = (value) => {
    setInput(value);
    if (value.length > 0) {
      navigate(`word/${value}`);
    } else {
      navigate("/dictionary");
    }
  };

  return (
    <div>
      <Heading/>
    <div className="dictionary">
      <div className="search-alphabet-bar">
        <div className="search-lang-bar">
          <span className="search-bar">
            <BiSearch />
            <input
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="Search for a word or phrase..."
            />
          </span>
          <select>
            <optgroup
              label="Choose your Language"
              style={{ borderBottom: "1px black solid", color: "#1A181C" }}
            />
            <option value="English" defaultChecked>
              English (UK)
            </option>
            <option value="Hausa">Hausa</option>
            <option value="Igbo">Igbo</option>
            <option value="Yoruba">Yoruba</option>
          </select>
        </div>
        <div className="alphabets">
          {alphabet.map((alp) => (
            <div key={alp}>
              <Link
                style={{ textDecoration: "none", color: "#1A181C" }}
                to={`letter/${alp}`}
              >
                <p>{alp}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {
        <Routes>
          <Route path="/" element={<AllWords />} />
          <Route path="/letter/:id" element={<Letters />} />
          <Route path="/word/:id" element={<Search />} />
        </Routes>
      }
    </div>
    </div>
  );
};

export default Dictionary;
