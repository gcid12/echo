import React, { Component } from 'react';

import './index.css';


class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'this is Results',
    };
  }

  render() {
    const state = this.state;
    return (
      <div>
        {state.title}
      </div>

    );
  }
}


export default Results;

