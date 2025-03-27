import React from "react";
import "./Campus.css"
import gallery_1 from "../../assets/gallery-01.webp"
import gallery_2 from "../../assets/gallery-02.webp"
import gallery_3 from "../../assets/gallery-03.avif"
import gallery_4 from "../../assets/gallery-04.avif"
import gallery_5 from "../../assets/gallery-05.avif"
import gallery_6 from "../../assets/gallery-06.jpg"
import white_arrow from "../../assets/white-arrow.jpg"


const Campus =() => {
    return (
        <div className="campus">
            <div className="gallery">
                <img src={gallery_1} alt="" />
                <img src={gallery_2} alt="" />
                <img src={gallery_3} alt="" />
                <img src={gallery_4} alt="" />
                <img src={gallery_5} alt="" />
                <img src={gallery_6} alt="" />
            </div>

            <button className= "btn dark-btn" >  See more  <img src={white_arrow} /> </button>
        </div>
    )
}

export default Campus