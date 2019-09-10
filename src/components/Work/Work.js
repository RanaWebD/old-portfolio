import React from "react";
import WorkCard from "./WorkCard/WorkCard";
import "./work.css";
import { Container, Row } from "react-bootstrap";

let workData = {
  freelancingWork: [
    {
      title: "DryCleaner Boys",
      tag: "/Laundry Websie",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s",
      tech: "HTML, CSS, JavaScript, NodeJs, MSG91 API, Digital Ocian",
      thumbnail: "./assets/dry-clean-logo.png",
      url: "http://drycleanerboys.com/"
    },
    {
      title: "DryCleaner Boys",
      tag: "/Laundry Mobile App",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s",
      tech:
        "React-Native, JavaScript, NodeJs, MongoDB, MSG91 API, Digital Ocian",
      thumbnail: "./assets/dry-clean-logo.png",
      url: "http://drycleanerboys.com/"
    }
  ],
  personalProjects: [
    {
      title: "Initab extention page clone",
      tag: "/clone",
      desc:
        "It's a solo project gave by Chingus. Chingus is a online community where developer participate and get collaboration experience with other developer. ",
      tech: "ReactJS",
      thumbnail: "./assets/initab-thumbnail.PNG",
      url: "https://ranawebd.github.io/initab-extension-page/"
    },
    {
      title: "Britny Bob",
      tag: "/ecommerce website",
      desc:
        "I developed this project with my Chingus team member. Chingus is an online community where developer participate and get collaboration experience with other developers.",
      tech: "ReactJS",
      thumbnail: "./assets/britney-bob.png",
      url: "https://competent-allen-80dbd0.netlify.com/"
    }
  ],
  certificate: [
    {
      title: "Chingu Certificate",
      tag: "/certificate",
      desc:
        "CERTIFICATE OF COMPLETION CHINGU VOYAGE 9",
      tech: "ReactJS",
      thumbnail: "./assets/chingu.jpg",
      url: "/certificate"
    }
  ]
};

function Work() {
  return (
    <Container className="work">
      <h2 className="work__primary--heading">Work ...</h2>
      <div className="work__card_box">
        <h3 className="work__card_box__heading">Freelancing Work ...</h3>
        <Row>
          {workData.freelancingWork.map(obj => (
            <WorkCard obj={obj} width="45%" />
          ))}
        </Row>
      </div>
      <div className="work__card_box">
        <h3 className="work__card_box__heading">Personal Projects ...</h3>
        <Row>
          {workData.personalProjects.map(obj => (
            <WorkCard obj={obj} width="45%" />
          ))}
        </Row>
      </div>
      <div className="work__card_box">
        <h3 className="work__card_box__heading">Certificate ...</h3>
        <Row>
          {workData.certificate.map(obj => (
            <WorkCard obj={obj} width="45%" />
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default Work;
