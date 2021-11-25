import React from "react";
import BottomNav from "../components/BottomNav";
import NavigationBar from "../components/NavigationBar";
import about from '../assets/about.jpg'

export default function About() {
  return (
    <>
      <NavigationBar />
      <div className="d-block text-center mx-5 mt-5">
        <h1>About Us</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        <p>
          Vivamus dictum molestie neque vel viverra. Ut blandit dignissim risus
          non euismod. Aliquam sem metus, accumsan eget iaculis vel, aliquam
          mattis risus. Integer consectetur nisi id turpis consequat rhoncus.
          Quisque dolor arcu, ullamcorper ut nibh quis, molestie mollis ante.
          Fusce nec congue odio. Sed eget ornare turpis. Quisque sit amet elit
          quis lacus laoreet imperdiet convallis volutpat nisi. Duis hendrerit
          dapibus neque, nec aliquet velit sagittis a.
        </p>
        <img src={about} alt="about"/>
      </div>
      <BottomNav />
    </>
  );
}
