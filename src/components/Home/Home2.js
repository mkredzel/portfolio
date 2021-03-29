import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.png";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I started my journey as a web developer with introductory Udacity courses, but I quickly came to realisation that I want to learn more about Computer Science itself and I enrolled myself to the university, where I learnt all CS fundamentals and some programming. After exploring all possible career paths I decided to master the thing that brought me here in the first place - Web Development!
              <br />
              <br />I feel comfortable with &nbsp;
              <i>
                <b className="purple"> HTML, CSS, JavaScript, Node.js, Vue.js, SQL & NoSQL DBs </b>
              </i>
              <br />
              <br />
              My current focus is on learning &nbsp;
              <i>
                <b className="purple">
                  TypeScript, React, GraphQL & Firebase
                </b>
              </i>
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" width="275px" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mkredzel"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:marcel.kredzel@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/mkredzel"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
