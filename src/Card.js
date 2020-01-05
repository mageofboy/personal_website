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
  render() {
    const image =
      this.props.state["src"] == null ||
      this.props.state["src"] === "" ? null : (
        <img
          src={require(this.props.state["src"] + "")}
          height="125px"
          alt="logo"
        />
      );
    const link =
      this.props.state["link"] == null ||
      this.props.state["link"] === "" ? null : (
        <Button
          onClick={this.nestedLinkHandler}
          href={this.props.state["link"]}
          target="_blank"
          rel="noopener noreferrer"
          variant="link"
        >
          Link
        </Button>
      );
    const activeClass = this.state.active ? " active" : "";
    return (
      <div className={"flip-card" + activeClass} onClick={this.flipHandler}>
        <div className="flip-card-inner">
          <div className={"flip-card-front " + this.props.state["type"]}>
            <div className="card-label">{this.props.state["type"]}</div>
            {image}
            <h2>{this.props.state["company"]}</h2>
            <p className="card-text-front">{this.props.state["title"]}</p>
            <p className="card-text-front">{this.props.state["period"]}</p>
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
