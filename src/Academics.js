import React, { Component } from 'react';
import Banner from './Banner';

class Academics extends Component {
  render() {
    return (
    <div className="App-content">
      <Banner/>
      <div className="wrapper-academics">
        <h1 className="text-header text-highlight">Academics</h1>
      </div>
    </div>
    )
  }
}

export default Academics;