import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./NavigationBar.module.css";
function NavigationBar(props) {
  // console.log(props);
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-md">
      <p className="navbar-brand mx-5">
        FUNBUY
      </p>
      <button
        className="navbar-toggler me-5"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse me-5 d-xs-flex justify-content-end" id="navbar">
        <ul className={`navbar-nav ${classes.links}`}>
          <li className="nav-item p-2 ">
            <NavLink
              className="text-light text-decoration-none"
              exact
              to="/"
              activeClassName={classes.active}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item p-2">
            <NavLink
              className="text-light text-decoration-none"
              to="/about"
              activeClassName={classes.active}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item p-2">
            <NavLink
              className="text-light text-decoration-none"
              to="/shop"
              activeClassName={classes.active}
            >
              Shop
            </NavLink>
          </li>
          <li className="nav-item p-2">
            <NavLink
              className="text-light text-decoration-none"
              to="/help"
              activeClassName={classes.active}
            >
              Help
            </NavLink>
          </li>
          {window.location.href!==props.current?
          <li className="nav-item p-2">
            <NavLink
              className="text-light text-decoration-none btn-danger btn"
              to="/cart"
              activeClassName={classes.activeCart}
            >
              Cart <i className="fas fa-shopping-cart p-1">{props.cartReducer.cartItems.length}</i>
            </NavLink>
          </li>:null }
        </ul>
      </div>
    </nav>
  );
}
const mapStateToProps=function(state){
  return state;
}
const NavigationBarContainer=connect(mapStateToProps)(NavigationBar);
export default NavigationBarContainer