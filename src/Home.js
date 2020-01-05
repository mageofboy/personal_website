import React, { Component } from 'react';
import Banner from './Banner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const resume = require("./eric_leong_resume.pdf");

class Home extends Component {
  render() {
    return (
        <div className="App-header">
        <Banner/>
        <div className="wrapper-header">
        <Container>
          <Row className="text-center">
            <h1 className="text-header"> Hello, I'm <span className="text-accent">Eric!</span></h1>
          </Row>
          <Row>
            <p className="summary">I am an aspiring <span className="text-highlight">Software Engineer </span>
            and third year <span className="text-highlight">Computer Science </span>
            student at <span className="text-highlight">U.C. Berkeley</span>.
            Please check out the rest of my website or my <a className="text-accent underline" href="./eric_leong_resume.pdf">resume</a> to learn more about me! </p>
          </Row>
          <Row className="text-center">
            <ul className="links">
              <li className="links-item"><a className="link" href="https://linkedin.com/in/eric-leong"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a></li>
              <li className="links-item"><a className="link" href="https://github.com/mageofboy"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
              <li className="links-item"><a className="link" href="mailto:leong.eric17@berkeley.edu"><FontAwesomeIcon icon="envelope"/></a></li>
              <li className="links-item"><a className="link" href={resume} target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon="file"/></a></li>
            </ul>
          </Row>
        </Container>
        </div>
      </div>
      )
  }
}

export default Home;