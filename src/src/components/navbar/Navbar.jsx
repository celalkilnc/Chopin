import React from "react";
import "./NavbarStyle.css";
import ProfileIcon from "../../icons/ProfileIcon";

function Navbar() {
  return (
    <div className="navbar">
      <h3 className="logo">Chopin</h3>
      <div className="navElements">
        <ul className="navItems">
          <li className="navItem">Home</li>
          <li className="navItem">About</li>
          <li className="navItem">Contact</li>
        </ul>
        <ProfileIcon />
      </div>
    </div>
  );
}

export default Navbar;
