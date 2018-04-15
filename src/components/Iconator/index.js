import React, { Component } from 'react';
import classNames from 'classnames';

import './index.css';


class Iconator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }
  iconSize() {
    const icon = this.props.size;
    let value = null;
    
    switch (icon) {
      case 's':
        value = 'icon_small';
        break;
      case 'm':
        value = 'icon_medium';
        break;
      case 'l':
        value = 'icon_large';
        break;
      case 'background':
        value = 'icon_background';
        break;
      case 'outline':
        value = 'icon_outline';
        break;
      default : value = 'icon_medium';
    }
    return value;
  }
  
  renderIcon() {
    const icon = this.props.icon;
    let value = null;
    
    switch (icon) {
      case 'reds':
        value = 'icon_red';
        break;
      case 'oranges':
        value = 'icon_orange';
        break;
      case 'yellows':
        value = 'icon_yellow';
        break;
      case 'greens':
        value = 'icon_green';
        break;
      case 'blues':
        value = 'icon_blue';
        break;
      case 'purples':
        value = 'icon_purple';
        break;
      case 'pinks':
        value = 'icon_pink';
        break;
      default : value = 'icon_neutral';
    }
    return value;
  }
  

  render() {
    const icon = this.renderIcon(this.props.icon);
    const size = this.iconSize(this.props.size);
    
    return (
      <div className="iconator">
       
        <div className={classNames(size, icon)} />
        
      </div>
    );
  }
}


export default Iconator;

