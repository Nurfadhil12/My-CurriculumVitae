import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    alert("Mohon Di tunggu 1 x 24jam")
    e.preventDefault();
    emailjs
      .sendForm(
        "service_15pomld",
        "template_w6i568j",
        formRef.current,
        "user_EgX73oC9ulSJAotTdhwO2"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );      
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              081226045563
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              nurfadhil138@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Gg. Tambura II, Wanasari, Sidanegara, Kec. Cilacap Tengah, Kabupaten Cilacap, Jawa Tengah 53212
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} style={{display:"contents"}} >
            <input style={{backgroundColor: darkMode && "#333"}} type="text" required placeholder="Name" name="user_name" className="mb-3"/>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" required placeholder="Subject" name="user_subject" className="mb-3"/>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" required placeholder="Email" name="user_email" className="mb-3"/>
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" required placeholder="Message" name="message" className="mb-3"/>
            <button className="Btn" style={{width: "100%"}} >Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
