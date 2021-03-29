import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "left" }}>
          {props.description}
        </Card.Text>
        <Button href={props.sourceCode} target="_blank" className={"project-card-button-left" + props.disabled1}>
          <i className="cib-github">&nbsp;</i>
          {"Source Code"}
        </Button>&nbsp;&nbsp;&nbsp;
        <Button href={props.liveDemo} target="_blank" className={"project-card-button-right" + props.disabled2}>
          <i className="cil-external-link" >&nbsp;</i>
          {"Live Demo"}
        </Button>
        
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
