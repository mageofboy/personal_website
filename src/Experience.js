import React, { Component } from 'react';
import Banner from './Banner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from './Card';
const experience_list = require('./experience.json');

class Experience extends Component {
  render() {
    let experience_cards = experience_list.map((item, i) => (
        <Card key={i} state={item}/>
      )
    )
    return (
    <div className="App-content">
      <Banner/>
      <div className="wrapper-experience">
        <h1 className="text-header">Experience</h1>
        <Container className="experience-content">
          <Row className="justify-content-center" >
            {experience_cards}
          </Row>
        </Container>
      </div>
    </div>
    )
  }
}

export default Experience;