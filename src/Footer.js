import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
                    <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                  </a>
                </li>
                <li className="links-item">
                  <a className="link" href="https://github.com/mageofboy">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="links">
                <li className="links-item mobile">contact:</li>
                <li className="links-item">
                  <a className="link" href="mailto:leong.eric17@berkeley.edu">
                    <FontAwesomeIcon icon="envelope" />
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="links">
                <li className="links-item mobile">resume:</li>
                <li className="links-item">
                  <a className="link" href="lol.com">
                    <FontAwesomeIcon icon="file" />
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="links">
                <li className="links-item">
                  <div className="copyright">© 2020 Eric Leong</div>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
