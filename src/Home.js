import React, { Component } from "react";
import Banner from "./Banner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const resume = require("./res/EricLeongJune2021.pdf");

class Home extends Component {
  render() {
    return (
      <div className="App-header">
        <Banner />
        <div className="wrapper-header">
          <Container>
            <Row className="text-center">
              <h1 className="text-header">
                {" "}
                Hello, I'm <span className="text-accent">Eric!</span>
              </h1>
            </Row>
            <Row>
              <p className="summary">
                I am a {" "}
                <span className="text-highlight">Software Engineer </span>
                and {" "}
                <span className="text-highlight">EECS Masters </span>
                student at <span className="text-highlight">U.C. Berkeley</span>
                . Please check out the rest of my website or my{" "}
                <a
                  className="text-accent underline"
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  resume
                </a>{" "}
                to learn more about me!{" "}
              </p>
            </Row>
            <Row className="text-center">
              <ul className="links">
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
                <li className="links-item">
                  <a className="link" href="mailto:leong.eric17@berkeley.edu">
                    <span className="link">
                      <FontAwesomeIcon icon="envelope" />
                    </span>
                  </a>
                </li>
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
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
