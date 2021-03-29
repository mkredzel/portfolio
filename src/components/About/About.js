import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          My <strong className="purple">Skills </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-html5-plain" Name="HTML" />
          <Techstack iconName="devicon-css3-plain" Name="CSS" />
          <Techstack iconName="devicon-bootstrap-plain" Name="Bootstrap" />
          <Techstack iconName="devicon-javascript-plain" Name="JavaScript" />
          <Techstack iconName="devicon-jquery-plain" Name="jQuery" />
          <Techstack iconName="devicon-nodejs-plain" Name="Node.js" />
          <Techstack iconName="devicon-express-original" Name="Express.js" />
          <Techstack iconName="devicon-vuejs-plain" Name="Vue" />
          <Techstack iconName="devicon-react-original" Name="React" />
          <Techstack iconName="devicon-php-plain" Name="PHP" />
          <Techstack iconName="devicon-python-plain " Name="Python" />
          <Techstack iconName="devicon-amazonwebservices-original" Name="AWS" />
          <Techstack iconName="devicon-java-plain" Name="Java" />
          <Techstack iconName="devicon-mysql-plain" Name="MySQL" />
          <Techstack iconName="devicon-mongodb-plain" Name="MongoDB" />
          <Techstack iconName="devicon-git-plain" Name="Git" />
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
