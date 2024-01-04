import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Home</li>
        </NavLink>
        <NavLink to={"/about"}>
          <li>About</li>
        </NavLink>
        <NavLink to={"/product"}>
          <li>Product</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar