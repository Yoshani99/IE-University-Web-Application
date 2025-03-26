import React from "react";
import "./Programme.css"
import program_1 from "../../assets/program-01.jpg"
import program_2 from "../../assets/program-02.webp"
import program_3 from "../../assets/program-03.jpeg"

import program_icon_1 from  "../../assets/icon-01.jpg"
import program_icon_2 from  "../../assets/icon-02.jpg"
import program_icon_3 from  "../../assets/icon-03.webp"

const Programme = () => {
  return(
    <div className="Programme">

      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>

      

      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Master Degree</p>
        </div>
      </div>



      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>PostGraduation Degree</p>
        </div>
      </div>

    </div>
  )
}

export default Programme