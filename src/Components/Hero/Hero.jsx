import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/1.jpg"



const Hero = () => {
    return (
        <div className = "hero container">
           <div className= "hero-text">
              <h1>Empowering Education for a Brighter Future</h1>
              <p>
                Education is the key to unlocking endless possibilities.When we invest in quality learning, we empower individuals 
                with the knowledge and skills they need to succeed.A strong education system not only helps people grow but also builds 
                a better society.By ensuring access to education for all, we create a future filled with opportunities, innovation, and progress.
              </p>
              <button className= "btn">Explore more <img src={dark_arrow}alt=""/></button>
           </div>
        </div>
    );
}

export default Hero