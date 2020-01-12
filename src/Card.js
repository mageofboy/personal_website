import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  flipHandler = () => {
    this.setState({
      active: !this.state.active
    });
  };
  nestedLinkHandler = e => {
    e.stopPropagation();
  };
  card_contains = (type) => {
    return this.props.state[type] !== undefined && this.props.state[type] !== "";
  }
  render() {
    const image =
      this.card_contains("src") ? <img src={require(this.props.state["src"] + "")} height="125px" alt="logo"/> : null;
    const link =
      this.card_contains("link") ? <Button onClick={this.nestedLinkHandler} href={this.props.state["link"]} target="_blank" rel="noopener noreferrer" variant="link">Link</Button> : null;
    const tools =
    this.card_contains("tool") ? <p> <span className="font-weight-bold">Technologies Used: </span> {this.props.state["tool"]} </p>: null;
    const activeClass = this.state.active ? " active" : "";
    return (
      <div className={"flip-card" + activeClass} onClick={this.flipHandler}>
        <div className="flip-card-inner">
          <div className={"flip-card-front content-shadow " + this.props.state["type"]}>
            <div className="card-label">{this.props.state["type"]}</div>
            {image}
            <h2>{this.props.state["company"]}</h2>
            <p className="card-text-front font-weight-normal">{this.props.state["title"]}</p>
            <p className="card-text-front font-weight-light">{this.props.state["period"]}</p>
          </div>
          <div className={"flip-card-back content-shadow " + this.props.state["type"]}>
            <p>{this.props.state["summary"]}</p>
            {tools}
            {link}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
