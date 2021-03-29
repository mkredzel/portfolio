import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            I am a<span className="purple"> Junior Web Developer </span>
            based in <span className="purple"> London, UK.</span><br />
            <br />I am about to finish a <span className="purple">BSc Computer Science</span> degree with first class honours. <br /><br />I am looking forward to starting my journey in the
            industry as well as expanding my professional skills.
            <br />
            <br />
            Apart from web development, <br />I am also interested in:
          </p>
          <ul>
          <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Travelling
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> UX Design
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Software Engineering
            </li>
          </ul>
          <br />
          <br />
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
