import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeLogo from "../../assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name" style={{ marginLeft: 5 }}>
                I am
                <strong className="main-name"> Marcel Kredzel</strong>
              </h1>
              <div style={{ marginLeft: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </Container>
      
        <Link
          activeClass="active"
          to="home-about-description"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
          className="scroll"
        >
          Scroll for more &nbsp; <span className="arrow"><i className="fa fa-arrow-down"></i></span>
        </Link>
      
      <Home2 />
    </section>
  );
}

export default Home;
