import React, { Component } from "react";
import Banner from "./Banner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "./Card";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
const experience_list = require("./experience.json");

class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: experience_list
    };
  }

  render() {
    return <Experience items={this.state.list} />;
  }
}
class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ["industry", "research", "project"],
      filtered: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState({
      filtered: this.props.items
    });
  }
  handleChange = val => {
    let currentList = [];
    let newList = [];
    currentList = this.props.items;
    newList = currentList.filter(item => {
      const lc = item["type"].toLowerCase();
      return val.includes(lc);
    });
    this.setState({
      filtered: newList,
      value: val
    });
  };

  render() {
    let experience_cards = this.state.filtered.map((item, i) => (
      <Card key={i} state={item} />
    ));
    return (
      <div className="App-content">
        <Banner />
        <div className="wrapper-experience">
          <h1 className="text-header">Experience</h1>
          <Container className="experience-content">
            <ToggleButtonGroup
              type="checkbox"
              value={this.state.value}
              onChange={this.handleChange}
              className="experience-filter"
            >
              <ToggleButton bsPrefix="switch-button" value={"industry"}>
                {" "}
                <span className="slider"></span>
              </ToggleButton>
              <ToggleButton bsPrefix="switch-button" value={"research"}>
                <span className="slider"></span>
              </ToggleButton>
              <ToggleButton bsPrefix="switch-button" value={"project"}>
                <span className="slider"></span>
              </ToggleButton>
            </ToggleButtonGroup>
            <Row className="justify-content-center">{experience_cards}</Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Base;
