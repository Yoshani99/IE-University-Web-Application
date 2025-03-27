import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programme from "./Components/Programme/Programme";
import Title from "./Components/Title/Title"
import About from "./Components/About/About"

const App = () => {
  return(
    <div>
      <Navbar/>
      <Hero/>


      <div className="container">
        <Title subTitle = "Our Program" title="What We Offer"/>
        <Programme/>
        <About/>
        <Title subTitle = "Gallery" title="Campus Photos"/>
      </div>
      
    </div>
  )
} 

export default App