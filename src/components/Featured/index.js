import React, { Component } from 'react';

import './Featured.css';


class Featured extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Featured',
    };
  }

  render() {
    const state = this.state;
    return (
      <div className="hexa_grid">
        <ul id="grid" className="clr">
          <li>
            <div className="hexagon">
              <p>test</p>
            </div>
          </li>
          <li>
            <div className="hexagon">
              <p>test</p>
            </div>
          </li>
          <li>
            <div className="hexagon">
              <p>test</p>
            </div>
          </li>
          <li>
            <div className="hexagon">
              <p>test</p>
            </div>
          </li>
          <li>
            <div className="hexagon">
              <p>test</p>
            </div>
          </li>
          <li>
            <div className="hexagon">
              <p>test</p>
            </div>
          </li>
          <li>
            <div className="hexagon">
              <p>test</p>
            </div>
          </li>
          <li>
            <div className="hexagon">
              <p>test</p>
            </div>
          </li>
          <li>
            <div className="hexagon">
              <p>test</p>
            </div>
          </li>
        </ul>
      </div>

    );
  }
}


export default Featured;

