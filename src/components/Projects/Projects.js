import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://i.imgur.com/eCN49C0.jpg"}
              title="EConsultant"
              description="Dissertation project implemented using AWS EC2, S3, DynamoDB, Lambda, Comprehend, API Gateway, Cognito, Web Speech API,
              Socket.io, Plotly.js, ZingChart.js & amCharts.js"
              sourceCode=""
              liveDemo=""
              disabled1="-disabled"
              disabled2="-disabled"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://i.imgur.com/ctGFt5f.jpg"}
              title="My Portfolio"
              description="My personal portfolio featuring some of my github projects as well as my skills & resume. Node.js, Express.js, React.js"
              sourceCode="a"
              liveDemo="https://mkredzel.me"
              disabled1=""
              disabled2=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://i.imgur.com/XjOHXur.jpeg"}
              title="Crypto Market Cap"
              description="Cryptocurrency rate visualization tool, which is a
              single page web application. AWS SageMaker, TypeScript, Lambda, DynamoDB, Vue.js, ZingChart.js"
              sourceCode="https://github.com/mkredzel/crypto-market-cap"
              liveDemo="https://cst3130-static-page.s3.amazonaws.com/index.html"
              disabled1=""
              disabled2=""
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://i.imgur.com/bB8vopH.png"}
              title="Price Checker"
              description="Price comparison website based on web scraping. Built with Java, Maven, Spring, Hibernate, JSoup, MySQL, Sequelize, Node.js, Express.js & Vue.js"
              sourceCode="https://github.com/mkredzel/price-checker"
              liveDemo="b"
              disabled1=""
              disabled2=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://i.imgur.com/5gR9hmW.png"}
              title="Cocktail Sharer"
              description="A cocktail recipe sharing application built with Node.js, Express, MySQL, Sequelize & Vue.js"
              sourceCode="https://github.com/mkredzel/cocktail-sharer"
              liveDemo="b"
              disabled1=""
              disabled2=""
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://i.imgur.com/2PugDoT.png"}
              title="After School"
              description="E-commerce website. MongoDB, Node.js & Vue.js. Application has been extended by creating NativeScript App - available in the separate GitHub repository."
              sourceCode="https://github.com/mkredzel/after-school-client"
              liveDemo="https://mkredzel.github.io/after-school-client"
              disabled1=""
              disabled2=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
