import React, { Component } from 'react';
import Banner from './Banner';

class Experience extends Component {
  render() {
    return (
    <div className="App-content">
      <Banner/>
      <div className="wrapper-experience">
        <h1 className="text-header text-highlight">Experience</h1>
      </div>
    </div>
    )
  }
}

export default Experience;