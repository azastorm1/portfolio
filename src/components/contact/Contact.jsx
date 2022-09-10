import "./contact.css";
import Phone from "../img/phone.png";
import Email from "../img/email.png";
import Address from "../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_u7st6x7",
        "template_gf6mygx",
        formRef.current,
        "HpV8Q5NKfr9s4s0i-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
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
          <h1 className="c-title">Зарегестрируйтесь на курсы здесь</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              <a
                style={{ color: darkMode && "white" }}
                id="send-a"
                href="tel: +998950910591"
              >
                +998950910591
              </a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png" alt="" />
              <a
                style={{ color: darkMode && "white" }}
                id="send-a"
                href="https://t.me/laziza_mursakulova"
              >
                laziza_mursakulova
              </a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              <a
                style={{ color: darkMode && "white" }}
                id="send-a"
                href="mailto: lazizamursakulova.dr@gmail.com"
              >
                lazizamursakulova.dr@gmail.com
              </a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Ташкент, Узбекистан, ТТЗ, напротив кафе Munisa Milliy Taomlar
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            Отправьте мне сообщение
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="number"
              placeholder="Phone"
              name="user_phone"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>{done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
