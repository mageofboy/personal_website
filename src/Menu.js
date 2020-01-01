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
    this.setState({openClass: nextProps.show ? ' open': ''})
  }
  render() {
    return (
      <nav className={'menu' + this.state.openClass}>
          {/* <div className={'menu-square menu-1' + this.getSquareClass("/")}>
            <NavLink to="/" exact onClick={this.props.click} activeClassName="selected">Home</NavLink>
          </div>
          <div className={'menu-square menu-2' + this.getSquareClass("/about") }>
            <NavLink to="/about" onClick={this.props.click} activeClassName="selected">About Me</NavLink>
          </div>
          <div className={'menu-square menu-3' + this.getSquareClass("/education")}>
            <NavLink to="/education" onClick={this.props.click} activeClassName="selected">Education</NavLink>
          </div>
          <div className={'menu-square menu-4'+ this.getSquareClass("/experience")}>
            <NavLink to="/experience" onClick={this.props.click} activeClassName="selected">Experience</NavLink>
          </div> */}
          <NavLink to="/" exact onClick={this.props.click} activeClassName="selected">
            <div className={'menu-square menu-1' + this.getSquareClass("/")}>
              <FontAwesomeIcon icon="home"/>
              <div className="menu-text">
                Home
              </div>
            </div>
          </NavLink>
          <NavLink to="/about" onClick={this.props.click} activeClassName="selected">
            <div className={'menu-square menu-2' + this.getSquareClass("/about") }>
              <FontAwesomeIcon icon="user"/>
              <div className="menu-text">
                About Me
              </div>
            </div>
          </NavLink>
          <NavLink to="/education" onClick={this.props.click} activeClassName="selected">
            <div className={'menu-square menu-3' + this.getSquareClass("/education")}>
              <FontAwesomeIcon icon="university"/>
              <div className="menu-text">
                Education
              </div>
            </div>
          </NavLink>
          <NavLink to="/experience" onClick={this.props.click} activeClassName="selected">
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

// const sideDrawer = props => {
//   let openClass = '';
//   if (props.show) {
//       openClass = ' open';
//   }
//   return (
//     <nav className={'menu' + openClass}>
//         <div className={'menu-square menu-1' + openClass}>
//           <NavLink to="/" exact onClick={props.click} activeClassName="selected">Home</NavLink>
//         </div>
//         <div className={'menu-square menu-2' + openClass}>
//           <NavLink to="/about" onClick={props.click} activeClassName="selected">About</NavLink>
//         </div>
//         <div className={'menu-square menu-3' + openClass}>
//           <NavLink to="/education" onClick={props.click} activeClassName="selected">Education</NavLink>
//         </div>
//         <div className={'menu-square menu-4' + openClass}>
//           <NavLink to="/experience" onClick={props.click} activeClassName="selected">Experience</NavLink>
//         </div>
//     </nav>
//   );
// };

export default Menu;
