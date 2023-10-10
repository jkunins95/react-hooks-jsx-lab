import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am a Software Engineer who has worked extensively on a multitude of projects in various top tech companies</p>
      <img src={image} alt="I made this"></img>
    </div>
  )
}

export default About;
