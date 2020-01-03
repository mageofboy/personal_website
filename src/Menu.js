import React, { Component } from 'react';
import {
  NavLink,
} from "react-router-dom";
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Menu extends Component {
  constructor (props) {
    super(props);
    this.state ={
      openClass:this.props.show ? ' open': '',
    }
  }
  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? ' selected' : '';
  }
  getSquareClass = (path) => {
    return this.state.openClass + this.getNavLinkClass(path);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({openClass: nextProps.show ? ' open': ''});
  }
  menuSquareClickHandler = () => {
    window.scrollTo(0, 0);
    this.props.click();
  };
  render() {
    return (
      <nav className={'menu' + this.state.openClass}>
          <NavLink to="/" exact onClick={this.menuSquareClickHandler} activeClassName="selected">
            <div className={'menu-square menu-1' + this.getSquareClass("/")}>
              <FontAwesomeIcon icon="home"/>
              <div className="menu-text">
                Home
              </div>
            </div>
          </NavLink>
          <NavLink to="/about" onClick={this.menuSquareClickHandler} activeClassName="selected">
            <div className={'menu-square menu-2' + this.getSquareClass("/about") }>
              <FontAwesomeIcon icon="user"/>
              <div className="menu-text">
                About Me
              </div>
            </div>
          </NavLink>
          <NavLink to="/education" onClick={this.menuSquareClickHandler} activeClassName="selected">
            <div className={'menu-square menu-3' + this.getSquareClass("/education")}>
              <FontAwesomeIcon icon="university"/>
              <div className="menu-text">
                Education
              </div>
            </div>
          </NavLink>
          <NavLink to="/experience" onClick={this.menuSquareClickHandler} activeClassName="selected">
            <div className={'menu-square menu-4'+ this.getSquareClass("/experience")}>
              <FontAwesomeIcon icon="briefcase"/>
              <div className="menu-text">
                Experience
              </div>
            </div>
          </NavLink>
      </nav>
    );
  }
}
Menu = withRouter(Menu);

export default Menu;
