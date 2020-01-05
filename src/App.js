import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faCheckSquare,
  faFile,
  faHome,
  faBriefcase,
  faUser,
  faUniversity
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import Footer from "./Footer";
library.add(
  faEnvelope,
  faCheckSquare,
  fab,
  faFile,
  faHome,
  faUser,
  faUniversity,
  faBriefcase
);

class App extends Component {
  state = {
    menuOpen: false
  };
  menuClickHandler = () => {
    this.setState(prevState => {
      return { menuOpen: !prevState.menuOpen };
    });
  };
  render() {
    return (
      <div className="App">
        <MenuButton show={this.state.menuOpen} click={this.menuClickHandler} />
        <Router>
          <div>
            <Menu show={this.state.menuOpen} click={this.menuClickHandler} />
            <Switch>
              <Route path="/about">
                <About />
                <Footer />
              </Route>
              <Route path="/education">
                <Education />
                <Footer />
              </Route>
              <Route path="/experience">
                <Experience />
                <Footer />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
