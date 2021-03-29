import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          {/* <h3>Designed and Developed by Soumyajit Behera</h3> */}
        </Col>
        <Col md="4" className="footer-copywright">
          <h3> <span style = {{fontSize: 15}}>© </span><span style = {{fontSize: 20}}> 2021</span> Marcel Kredzel</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/mkredzel"
                style={{ color: "white" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/mkredzel"
                style={{ color: "white" }}
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:marcel.kredzel@gmail.com"
                style={{ color: "white" }}
              >
                <i className="fa fa-envelope"></i>
              </a>
            </li>
            
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
