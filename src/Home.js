import React, { Component } from 'react';
import Banner from './Banner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends Component {
  render() {
    return (
        <div className="App-header">
        <Banner/>
        <div className="wrapper-header">
        <Container>
          <Row className="text-center">
            <h1 className="text-header"> Hello, I'm <span className="text-highlight">Eric!</span></h1>
          </Row>
          <Row>
            <p className="summary">I am currently a third year undergrad at <span className="text-highlight">U.C. Berkeley</span>,
            studying <span className="text-highlight">Computer Science</span> and
            <span className="text-highlight"> Data Science</span>.</p>
          </Row>
          <div className="links text-center">
          <Row>
            <Col>
              <a className="link" href="https://linkedin.com/in/eric-leong"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
            </Col>
            <Col>
              <a className="link" href="https://github.com/mageofboy"><FontAwesomeIcon icon={['fab', 'github']} /></a>
            </Col>
            <Col>  
              <a className="link" href="mailto:leong.eric17@berkeley.edu"><FontAwesomeIcon icon="envelope"/></a>
            </Col>
            <Col>  
              <a className="link" href="lol.com"><FontAwesomeIcon icon="file"/></a>
            </Col>
          </Row>
          </div>
        </Container>
        </div>
      </div>
      )
  }
}

export default Home;