import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./BottomNav.module.css";
export default function BottomNav() {
  return (
    <div className={`bg-dark ${classes.bottomnav}`}>
      <ul className="d-flex justify-content-center mb-0">
        <li className="navbar px-2">
          <NavLink
            className="text-light text-decoration-none"
            exact
            to="/"
            activeClassName={classes.active}
          >
            Home
          </NavLink>
        </li>
        <li className="navbar px-2">
          <NavLink
            className="text-light text-decoration-none"
            to="/about"
            activeClassName={classes.active}
          >
            About
          </NavLink>
        </li>
        <li className="navbar px-2">
          <NavLink
            className="text-light text-decoration-none"
            to="/shop"
            activeClassName={classes.active}
          >
            Shop
          </NavLink>
        </li>
        <li className="navbar px-2">
          <NavLink
            className="text-light text-decoration-none"
            to="/help"
            activeClassName={classes.active}
          >
            Help
          </NavLink>
        </li>
      </ul>
      <div className="d-flex justify-content-center text-light py-0 my-0">
        <p className="py-0 my-0">FUNBUY</p>
      </div>
    </div>
  );
}
