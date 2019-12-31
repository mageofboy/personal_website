import React, { Component } from 'react';
import {
  NavLink,
} from "react-router-dom";
import { withRouter } from 'react-router-dom'

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
          <div className={'menu-square menu-1' + this.getSquareClass("/")}>
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
          </div>
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
