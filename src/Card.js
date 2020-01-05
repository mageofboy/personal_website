import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  flipHandler = () => {
    console.log(this.state.active);
    this.setState({
      active: !this.state.active
    });
  }
  render() {
    const image =
      this.props.state["src"] == null ||
      this.props.state["src"] === "" ? null : (
        <img src={this.props.state["src"]} alt="logo" />
      );
    const link =
      this.props.state["link"] == null ||
      this.props.state["link"] === "" ? null : (
        <img src={this.props.state["src"]} alt="logo" />
      );
    const activeClass = this.state.active ? " active" : "";
    return (
      <div className={"flip-card" + activeClass} onClick={this.flipHandler}>
        <div className="flip-card-inner">
          <div className={"flip-card-front " + this.props.state["type"]}>
            <div className="card-label">{this.props.state["type"]}</div>
            {image}
            <h2>{this.props.state["company"]}</h2>
            <p>{this.props.state["title"]}</p>
            <p>{this.props.state["period"]}</p>
          </div>
          <div className={"flip-card-back " + this.props.state["type"]}>
            <p>{this.props.state["summary"]}</p>
            {link}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
