import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Featured.css';


class Featured extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: '500px',
      height: '500px',
      fill: '#00FF00',
    };
  }
  updateState() {

      console.log('Cliccccckkkkkked')
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
        </ul>
        <ul className="grid clr row2">
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
          <li>
            <div className="hexagon">
              <p>1cinco</p>
            </div>
          </li>
          <li>
            <a href="http://yahoo.com">
              <div className="hexagon">
                <p>1seis</p>
              </div>
            </a>
          </li>
          <li>
            <div className="hexagon">
              <p>1siete</p>
            </div>
          </li>
 
        </ul>
        <ul className="grid clr row3">
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
        </ul>


        <div className="xmark-container">
          <svg className='xmark' viewBox="0 0 396 266.42" width={this.state.width} height={this.state.height} version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">

            <polygon className="cls-1" points="0.5 114.03 0.5 38.39 66 0.58 131.5 38.39 131.5 114.03 66 151.84 0.5 114.03"/><path d="M185,84.3l65,37.53v75.06l-65,37.53-65-37.53V121.83L185,84.3m0-1.15-66,38.11v76.21l66,38.11,66-38.11V121.25L185,83.15Z" transform="translate(-119 -83.15)"/>
            <Link
                key={224}
                to={{
                    pathname: `/greens/1`,
                    state: { modal: true },
                }}
            >
              <polygon className="cls-2" fill={this.state.fill} points="132.5 114.03 132.5 38.39 198 0.58 263.5 38.39 263.5 114.03 198 151.84 132.5 114.03"/><path d="M317,84.3l65,37.53v75.06l-65,37.53-65-37.53V121.83L317,84.3m0-1.15-66,38.11v76.21l66,38.11,66-38.11V121.25L317,83.15Z" transform="translate(-119 -83.15)"/>
            </Link>
            <polygon className="cls-3" points="264.5 114.03 264.5 38.39 330 0.58 395.5 38.39 395.5 114.03 330 151.84 264.5 114.03"/><path d="M449,84.3l65,37.53v75.06l-65,37.53-65-37.53V121.83L449,84.3m0-1.15-66,38.11v76.21l66,38.11,66-38.11V121.25L449,83.15Z" transform="translate(-119 -83.15)"/>
            <polygon className="cls-4" points="66.5 228.03 66.5 152.39 132 114.58 197.5 152.39 197.5 228.03 132 265.84 66.5 228.03"/><path d="M251,198.3l65,37.53v75.06l-65,37.53-65-37.53V235.83l65-37.53m0-1.15-66,38.11v76.21l66,38.11,66-38.11V235.25l-66-38.11Z" transform="translate(-119 -83.15)"/>
            <polygon className="cls-5" points="198.5 228.03 198.5 152.39 264 114.58 329.5 152.39 329.5 228.03 264 265.84 198.5 228.03"/><path d="M383,198.3l65,37.53v75.06l-65,37.53-65-37.53V235.83l65-37.53m0-1.15-66,38.11v76.21l66,38.11,66-38.11V235.25l-66-38.11Z" transform="translate(-119 -83.15)"/>

          </svg>
        </div>
      </div>

    );
  }
}


export default Featured;

