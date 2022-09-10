import "./about.css";
import me from "../img/me.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title"> Набор на 2022-2023 учебный год</h1>
        <p className="a-sub">
          Идет набор в подготовительные курсы по биологии на 2022-2023 учебный
          год <br /> Если Ты, хочешь стать студентом престижных вузов
          Узбекистана, таких как:
          <ul>
            <li>ТМА (ТашМИ);</li>
            <li>ТашГСИ (Стоматологический);</li>
            <li>ТашПМИ (САМПИ);</li>
            <li>ТашФарМИ; ▪️МГУ им. М. В. Ломоносова;</li>
            <li>YEOJU; ▪️EMU (Evromed);</li>
            <li>ТГПУ (Низами); студентом:</li>
          </ul>
            
           
          
        </p>
        <p className="a-desc"></p>
      </div>
    </div>
  );
};

export default About;
