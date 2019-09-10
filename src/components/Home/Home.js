import React from "react";
import "./home.css";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <div className="home">
            <div>
              <h1 className="logo">
                <img src="./assets/RanaWebD.svg" height="auto" width="100%" alt="brand-logo" />
              </h1>
            </div>

            <div className="banner">
              <h1 className="banner__primary-heading">
                {/* <span className="banner__primary-heading--main">Himanshu Rana</span> */}
                <span className="banner__primary-heading--sub">
                  front-end Developer
                </span>
              </h1>
              <p className="banner__secondary-heading">
                Hello, Welcome to my portfolio. My name is Himanshu Rana, a self-taught
                front-end web developer. I love to work with designs and
                transform them into reality and make them responsive.
              </p>
            </div>
          </div>
        </Col>
        {/* <div className="ellipse">
          <img src="./assets/Ellipse.png" height="auto" width="100%" />
          <img src="./assets/Rectangle.svg" height="auto" width="100%" />
        </div> */}
      </Row>
    </Container>
  );
}

export default Home;
