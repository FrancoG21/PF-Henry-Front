import React from "react";
import { Link } from "react-router-dom";
// import '../About/About.css';

export default function About() {
  return (
    <>
      <h1>Welcome!</h1>
      <h3>
        We are a team of 8 full stack developers with the idea of ​​making an
        App for social benefit and for help pets find a home! For this project we
        use the following technologies:
        <ul>- Javascript</ul>
        <ul>- React</ul>
        <ul>- Redux</ul>
        <ul>- CSS</ul>
      </h3>
      {/* <h4>Quieres saber mas de nosotros?<button className="btn-contact"><Link className="link" to='/contact'>Contactanos!</Link></button></h4> */}
    </>
  );
}
