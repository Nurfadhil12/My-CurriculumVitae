import "./about.css";
// import Award from "../../img/award.png";
import Ibout from "../../img/about.jpeg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Ibout}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        {/* <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p> */}
        <p className="a-desc">
        I am a graduate of Telkom Purwokerto Vocational High School majoring in software engineering, I am active in web design extracurricular activities and I often take part in web design competitions at university, I also like web design or applications. After graduating I worked at a start up company in Jakarta and I was there as frontend development and QA engineering. now I'm freelance and improving my skills at home by attending bootcamp training
        </p>
        <div className="a-award">
          {/* <img src={Award} alt="" className="a-award-img" /> */}
          <div className="a-award-texts">
            {/* <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
