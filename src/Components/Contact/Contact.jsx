import React from "react";
import "./Contact.css"
import msg_icon from "../../assets/msg-icon-1.webp"
import mail_icon from "../../assets/mail-icon.jpg"
import phone_icon from "../../assets/phone-icon.jpg"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"





const Contact = ( ) => {


  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d5007242-d4a1-4d0f-b14b-e9f930d824c0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return(
    <div className="contact">
        <div className="contact-col">
           <h3>Send us a Message <img src={msg_icon} alt=""/>   </h3>
           <p>Feel free to contact us using the form or the details below.
            Your feedback, questions, and suggestions matter to us as we work
            to give the best service to our university community.</p>
        <ul>
            <li> <img src={mail_icon} alt=""/> IE-University@gmail.com</li>
            <li> <img src={phone_icon} alt=""/>+94 123 - 4567 - 890</li>
            <li> <img src={location_icon} alt=""/>1/99 Anthony Road,<br/>BourneMouth,<br/>BH1 1AA.</li>
        </ul>
        </div>



        <div className="contact-col">
            <form onSubmit={onSubmit}>
               <label>Your Name</label>
               <input type="text" name="name" placeholder="Enter Your Name" required/>

               <label>Phone Number</label>
               <input type="telephone" name="phone" placeholder="Enter Your Phone Number" required/>

               <label>Write Your Messages here</label>
               <textarea name="message" rows="6" placeholder="Enter Your Message" required></textarea>
               <button type="submit" className="btn dark-btn"> Submit Now <img src={white_arrow} alt=""/></button>
            </form>
            <span>{result}</span>
        </div>


    </div>
  )
}

export default Contact;
