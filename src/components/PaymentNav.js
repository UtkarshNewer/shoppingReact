import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./PaymentNav.module.css";
export default function PaymentNav() {
    const handleClick=(e)=>{
        e.preventDefault();
    }
  return (
    <div className={classes.OrderNav}>
      <nav className="navbar navbar-expand">
        <div className="container-fluid d-flex justify-content-center">
          <ul className="nav navbar-nav ">
            <li className={`px-2 ${classes.normalLink}`}>
              <NavLink
                className={classes.paymentNavItem}
                activeClassName={classes.activeCartNav}
                to="/cart"
              >
                1. Shopping Cart
              </NavLink>
            </li>
            <li className={`px-2 ${classes.normalLink}`}>
              <NavLink
                className={classes.paymentNavItem}
                activeClassName={classes.activeCartNav}
                to="/order-details"
                onClick={handleClick}
              >
                2. Shipping Details
              </NavLink>
            </li>
            <li className={`px-2 ${classes.normalLink}`}>
              <NavLink
                className={classes.paymentNavItem}
                activeClassName={classes.activeCartNav}
                to="/payment"
                onClick={handleClick}
              >
                3. Payment Options
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
