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
        <ul className="grid clr">
          <li>
            <div className="hexagon">
              <p>uno</p>
            </div>
          </li>
          <li>
            <div className="hexagon">
              <p>dos</p>
            </div>
          </li>
          <li>
            <div className="hexagon">
              <p>tres</p>
            </div>
          </li>
          <li>
            <div className="hexagon">
              <p>cuatro</p>
            </div>
          </li>
          <li>
            <div className="hexagon">
              <p>cinco</p>
            </div>
          </li>
          <li>
            <div className="hexagon">
              <p>seis</p>
            </div>
          </li>
          <li>
            <div className="hexagon">
              <p>siete</p>
            </div>
          </li>
          <li>
            <div className="hexagon">
              <p>ocho</p>
            </div>
          </li>
          <li>
            <div className="hexagon">
              <p>nueve</p>
            </div>
          </li>
        </ul>
        <ul className="grid clr push1">
          <li>
            <div className="hexagon">
              <p>1uno</p>
            </div>
          </li>
          <li>
            <div className="hexagon">
              <p>1dos</p>
            </div>
          </li>
          <li>
            <div className="hexagon">
              <p>1tres</p>
            </div>
          </li>
          <li>
            <div className="hexagon">
              <p>1cuatro</p>
            </div>
          </li>
 
        </ul>
      </div>

    );
  }
}


export default Featured;

