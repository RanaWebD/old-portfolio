import React from "react";
import "./skills.css";

let skillsData = {
  frontEnd: [
    {
      url: "./assets/html-5.png"
    },
    {
      url: "./assets/css-3.svg"
    },
    {
      url: "./assets/javascript.png"
    },
    {
      url: "./assets/react.png"
    },
    {
      url: "./assets/redux.png"
    }
  ],
  tools: [
    {
      url: "./assets/github.svg"
    },
    {
      url: "./assets/git.png"
    }
  ]
};

function Skills() {
  return (
    <div className="skills">
      <h2 className="skills__primary--heading">SKILLS...</h2>
      <div className="skills__content"> 
        <div className="skills__card"> 
          <h3 className="skills__secondary--heading">Front-End</h3>
          <div class="skills__card__icon-box">
            {skillsData.frontEnd.map((obj, i) => (
              <img
                src={obj.url}
                className="skills__card__icon-box--img"
                alt="skill-icon"
                height="auto"
                width="50px"
                key={i}
              />
            ))}
          </div>
        </div>
        <div className="skills__card">
          <h3 className="skills__secondary--heading">Tools</h3>
          <div class="skills__card__icon-box">
            {skillsData.tools.map((obj, i) => (
              <img
                src={obj.url}
                className="skills__card__icon-box--img"
                alt="skill-icon"
                height="50px"
                width="50px"
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;