import React, { Component } from 'react';
import Banner from './Banner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

class Education extends Component {
  render() {
    var classes = [
      ["CS 61A: Structure and Interpretation of Computer Programs", "A"],
      ["EE 16A: Designing Information Devices and Systems I", "A-"],
      ["Math 53: Multivariable Calculus", "A-"],
      ["CS 61B: Data Structures", "A+"],
      ["CS 70: Discrete Math and Probability", "A-"],
      ["CS 61C: Computer Architecture", "A"],
      ["CS 170: Algorithms and Intractible Problems", "A-"],
      ["CS 188: Artificial Intelligence", "A-"],
      ["CS 162: Operating Systems & Systems Programming", "A-"],
      ["DS 100: Principles and Techniques of Data Science", "A"],
      ["EECS 127: Convex Optimization", "A-"],
      ["CS 189: Machine Learning", "In Progress"],
      ["CS 161: Computer Security", "In Progress"],
      ["STAT 140: Probability for Data Science", "In Progress"]
    ];
    console.log(classes);
    var courseWork = classes.map(function(class_descript, i){
    return <li key={i} className="course"><p className="leftalign">{class_descript[0]} </p><p className="rightalign">{class_descript[1]}</p></li>
    })
    return (
    <div className="App-content">
      <Banner/>
      <div className="wrapper-education">
        <h1 className="text-header text-highlight">Education</h1>
        <Container className="education-content">
          <Row className="education-row">
            <Col xs={12} md={3}>
              <img height="100%" width="100%" alt="Berkeley Logo" className="berkeley-logo" src={require('./uc-berkeley-logo-seal.jpg')} />
            </Col>
            <Col  xs={12} md={9}  className="education-grad align-self-center">
              <h1>University of California, Berkeley</h1>
              <p>
                Expected Graduation: <span className="italic">May 2021</span>
                <br/>
                B.A. in <span className="italic">Computer Science</span>
                <br/>
                GPA: <span className="italic">3.876</span>
              </p>
            </Col>
          </Row>
          <Row className="education-row justify-content-center">
            <h1>Relevant Coursework</h1>
            <ul className="coursework">
              {courseWork}
            </ul>
          </Row>
        </Container>
      </div>
    </div>
    )
  }
}

export default Education;