import React, { Component } from 'react';

import './Filter.css';


class Filter extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>

    );
  }
}


export default Filter;

