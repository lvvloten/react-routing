// src/components/NavBar.tsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <h1>Navigation</h1>
      <NavLink activeStyle={{ fontWeight: "bold" }} exact={true} to="/">
        Home Page
      </NavLink>
      {" - "}
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/discover">
        Discover Movies Page
      </NavLink>
      {" - "}
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/about">
        About this website
      </NavLink>
      <hr />
    </div>
  );
}
