import React from "react";

import Button1 from "../../Buttons/Buttons";
import "./workCard.css";
import { Col} from "react-bootstrap";

const WorkCard = props => {
  let { title, thumbnail, desc, tag, tech, url } = props.obj;
  return (
    <Col xs={12} md={6} style={{ width: props.width }}>
      <div class="work-card">
        <div class="work-card__thumbnail">
          <img src={thumbnail} width="70%" height="auto" />
          {/* <div style={{height: "200px", width: "100%"}} /> */}
        </div>
        <h3 className="work-card--heading">{title}</h3>
        <span className="work-card--tag">{tag}</span>
        <p class="work-card--desc">{desc}</p>
        <a class="work-card--visit-btn" href={url} target="blank">
          <Button1 text="visit" color="white" backgroundColor="#F20732" />
        </a>
        <span className="work-card--tech">{tech}</span>
      </div>
    </Col>
  );
};

export default WorkCard;
