import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programme from "./Components/Programme/Programme";

const App = () => {
  return(
    <div>
      <Navbar/>
      <Hero/>

      <div className="container">
        <Programme/>
      </div>
      
    </div>
  )
}

export default App