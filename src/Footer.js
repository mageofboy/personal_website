import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const resume = require("./res/eric_leong_resume.pdf");

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container className="wrapper-footer">
          <Row className="lol">
            <Col>
              <ul className="links">
                <li className="links-item mobile">social:</li>
                <li className="links-item">
                  <a className="link" href="https://linkedin.com/in/eric-leong">
                    <span className="link">
                      <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                    </span>
                  </a>
                </li>
                <li className="links-item">
                  <a className="link" href="https://github.com/mageofboy">
                    <span className="link">
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </span>
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="links">
                <li className="links-item mobile">contact:</li>
                <li className="links-item">
                  <a className="link" href="mailto:leong.eric17@berkeley.edu">
                    <span className="link">
                      <FontAwesomeIcon icon="envelope" />
                    </span>
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="links">
                <li className="links-item mobile">resume:</li>
                <li className="links-item">
                  <a
                    className="link"
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="link">
                      <FontAwesomeIcon icon="file-pdf" />
                    </span>
                  </a>
                </li>
              </ul>
            </Col>
            <Col className="align-self-center">
              <div className="copyright">© 2020 Eric Leong</div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
