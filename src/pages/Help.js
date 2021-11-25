import React from "react";
import BottomNav from "../components/BottomNav";
import NavigationBar from "../components/NavigationBar";

export default function Help() {
  return (
    <>
      <NavigationBar />
      <div className="card mx-5 mt-5 shadow">
        <div className="card-body">
          <h1 className="card-title">Welcome! How can we help you?</h1>
          <ul className="list-group  w-100">
              <li className="list-group-item">
                  <a href="#">Check order delivery date.</a>
              </li>
              <li className="list-group-item">
                  <a href="#">Cancel Order</a>
              </li>
              <li className="list-group-item">
                  <a href="#">Replacement or any other queries.</a>
              </li>
          </ul>
        </div>
      </div>
      <BottomNav />
    </>
  );
}
