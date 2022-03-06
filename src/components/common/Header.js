import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };
  return (
    <nav>
      <NavLink end to="/" style={({ isActive }) => (isActive ? activeStyle : null)}>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" style={({ isActive }) => (isActive ? activeStyle : null)}>
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : null)}>
        About
      </NavLink>
    </nav>
  );
}

export default Header;
