import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Banner from './Banner';


class About extends Component {
  render() {
    return (
    <div className="App-content">
      <Banner/>
      <div className="wrapper-about">
        <h1 className="text-header">About Me</h1>
        <Container>
          <Row>
            <Col xs={12} md={3}>
            <div className="profpic">
              <img height="100%" width="100%" alt="profile" src={require('./portrait1.jpg')} />
            </div>
            </Col>
            <Col  xs={12} md={9} className="about-bio">
              <p>
              Hi, I'm Eric! I'm a third year Computer Science student at UC Berkeley. I actually came into Berkeley intending to study Biology and pursue the pre-med route for medical school. However, out of interest, I decided to take a Computer Science class and I enjoyed the class so much that decided to study Computer Science instead. What I particularly love about Computer Science is how applicable the concepts are in other fields, especially in today's technology centered society. Some of my fields of interest are Computational Biology, Data Science & Machine Learning, and Web Development but I am generally interested in all that Computer Science has to offer.
              </p>
            </Col>
          </Row>
          <Row className="about-etc">
            <Col md={12} lg={true} className="about-etc-col">
              <p>
              I am fond of Full Stack Development as a result of prior experience with Web Development. I acted as a Web Committee Co-Director of the UC Berkeley IEEE chapter where I lead the committee through multiple projects to improve the website. I also have experience with Full Stack Development as a Software Engineering Intern at a SkyDeck startup, CatalistX, where I developed a wide variety of features in addition to a few bigger ones, such as a messenger feature.
              </p>
            </Col>
            <Col md={12} lg={true} className="about-etc-col">
              <p>
              I developed an interest in Data Science and Analytics over the summer, where I worked as a Software Engineering Intern at Symantec on the Norton Mobile Solutions team. I developed an automated performance testing pipeline that is usable by all the mobile apps. The pipeline is currently in use for comparing new product releases to previous ones and identifying any performance differences through analysis on collected performance data. I had a very enjoyable time developing the pipeline and following the Data Science life cycle.
              </p>
            </Col>
            <Col md={12} lg={true} className="about-etc-col">
              <p>
              Though I am now studying Computer Science, I still hold an interest in Biology and am currently exploring the intersection between Computer Science and Biology by partaking in Computational Biology research. In my research, I use algorithms and Computational tools to work with Biological Data, such as protein sequences, to establish a relationship between certain animal traits and genes. 
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    )
  }
}

export default About;