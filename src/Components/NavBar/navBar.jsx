import React from "react";
import "./navBar.css";
import Rain from "../../assets/Rain.png";
function NavBar() {
  return (
    <div className="navBarContainer">
      <div className="navBarContainer-TwoLS">
        <div className="navBarContainer-TwoLS-Logo">
          <h3 className="navBarContainer-TwoLS-Logo-title">My Weatherz</h3>
        </div>
      </div>
      <div className="navBarContainer-SearchBar"></div>
    </div>
  );
}

export default NavBar;
