import React from "react";
import Button1 from "../Buttons/Buttons";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about__content">
        <h2 className="about__primary--heading">About...</h2>
        <p className="about--desc">
          I am an Indian self-taught front-end web developer. I love to talk
          with foreigner. <br />
          <br />I love to see what I do in front of my eyes. I love to see
          things in reality that's why I choose front-end development. I love to
          work with design/mockups and convert them into reality and make them
          responsive with the help of front-end technology.
        </p>
        <p className="about--email">himanshu.rana2111@gmail.com</p>
        <p className="about--add">
          {/* <span>House No. 123,, XXXX XXXX,</span> */}
          {/* <br /> */}
          <span>Delhi/India</span>
          {/* <br /> */}
          {/* <span>Near by Rohini Sec - 99.</span> */}
        </p>
        {/* <div className="about__btn" style={{ width: 200 }}>
          <Button1 text="download resume" backgroundColor="#F20732" />
        </div> */}
      </div>
    </div>
  );
}

export default About;
