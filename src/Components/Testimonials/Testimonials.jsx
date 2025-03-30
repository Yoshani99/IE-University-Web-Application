import React, { useRef } from "react";
import "./Testimonials.css"
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.avif"
import user_2 from "../../assets/user-2.jpg"
import user_3 from "../../assets/user-3.avif"
import user_4 from "../../assets/user-4.webp"
import user_5 from "../../assets/user-5.jpg"

const Testimonials =() => {


    const slider = useRef();
    let tx = 0;

const slideForward =() => {
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

const slideBackward =() => {
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}



    return (
        <div className="testimonials">
           <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
           <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />


           <div className="slider"> 
              <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Helena Perera</h3>
                                <span>IE , UK </span>
                            </div>
                        </div>
                        <p>Studying at IE has been an incredible experience.The campus provides a great learning
                        environment with modern facilities, helpful professors, and a supportive student community.
                        I have grown both academically and personally,and I’m glad I chose this university for
                        my degree.</p>
                    </div>
                </li>





                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Leo Lucas</h3>
                                <span>IE , UK </span>
                            </div>
                        </div>
                        <p>IE is more than just a university; it's a place that inspires growth and innovation. 
                           The supportive faculty, modern classrooms, and hands-on learning approach have made my
                           studies truly rewarding. I'm proud to be a student here.</p>
                    </div>
                </li>




                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Julia Hazel</h3>
                                <span>IE , UK </span>
                            </div>
                        </div>
                        <p>Deciding to do my degree at IE was one of the best choices I have ever made.The welcoming community,
                            advanced facilities, and strong focus on academic success have gone beyond my expectations.</p>
                    </div>
                </li>


                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Isabella Eleanor</h3>
                                <span>IE , UK </span>
                            </div>
                        </div>
                        <p>IE has provided me with an amazing academic journey. The well-equipped campus, dedicated professors, 
                            and diverse student body have made my learning experience both exciting and enriching.I'm grateful
                            to be part of such a dynamic environment</p>
                    </div>
                </li>


                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_5} alt="" />
                            <div>
                                <h3>Henry Thomas</h3>
                                <span>IE , UK </span>
                            </div>
                        </div>
                        <p>Choosing IE for my degree was a great decision. The university offers excellent resources, engaging courses, 
                            and a friendly atmosphere that makes learning enjoyable. It has truly helped me develop both my skills
                            and confidence.</p>
                    </div>
                </li>



                


              </ul>
           </div>


        </div>
    )
}

export default Testimonials