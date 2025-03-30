import React from "react";
import "./About.css"
import about_img from "../../assets/about.jpg"
import play_icon from "../../assets/play-icon.png"


const About = ({setPlayState}) => {
  return(
    <div className="about">

       <div className= "about-left">
          <img src={about_img} alt="" className="about-img" />
          <img src={play_icon} alt="" className="play-icon"onClick={()=>{setPlayState(true)}}/>
       </div>

       <div className= "about-right">
          <h3>ABOUT UNIVERSITY</h3>
          <h2>Developing Tomorrow Visionaries Today</h2>
          <p>A university plays a vital role in shaping future leaders by offering quality education at different levels. 
            With graduation degrees, students build a strong foundation in their chosen fields. Postgraduate degrees provide advanced knowledge and 
            specialized skills, preparing them for professional growth. For those seeking expertise, a master degree enhances their abilities 
            and opens doors to leadership opportunities.Through innovation, research, and learning, universities develop visionaries who will shape the future.</p>
       </div>

    </div>
  )
}

export default About;