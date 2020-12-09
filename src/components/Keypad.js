import React, { Component } from 'react';

export default class Keypad extends Component {

  pressKey = () => { console.log('Entering password...'); }
    
  render() {
    return (
      <input onKeyUp={this.pressKey} type="password" />
    )
  }

}