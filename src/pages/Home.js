import React from "react";
import BottomNav from "../components/BottomNav";
import NavigationBar from "../components/NavigationBar";
import homeImage from '../assets/online_shopping.jpeg'
import { NavLink } from "react-router-dom";
import classes from '../pages/Home.module.css'

export default function Home() {
  return (
    <>
      <NavigationBar />
      <img className="w-100 h-25" src={homeImage} alt="home"/>
      <h3 className={classes.title}><NavLink to="/shop">Go to Shopping page</NavLink></h3>
      <BottomNav/>
    </>
  );
}
