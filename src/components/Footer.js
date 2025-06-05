import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  // AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
  // AiFillSkype
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Sidney Campos</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            
            
            
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
