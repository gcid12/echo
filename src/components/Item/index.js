import React, { Component } from 'react';
import './index.css';


class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'this is Item',
    };
  }
  

  render() {
    let imgUrl = this.props.data.calculated.resized_logo;
    
    return (
      
      <div className="product_item">
        <div className="company-logo"
            style={{backgroundImage: `url(${imgUrl})` }}
        />
        <div className="company-name">
          { this.props.data.name }
        </div>
      </div>

    );
  }
}


export default Item;

