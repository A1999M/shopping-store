import React from "react";
import "./navbar.scss";

export default function NavBar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <ul className="navbar">
            <li className="navItems leftItem">ecommerce</li>
            <li className="navItems">home</li>
            <li className="navItems">shop</li>
            <li className="navItems">about</li>
          </ul>
        </div>
      </div>
    </>
  );
}
