// Code Keypad Component Here
import React, { Component } from 'react';
export default class Keypad extends Component {
  render() {
    return(

      <input onKeyUp={() => console.log('Entering password...')} type="password"  />
     // should trigger console output when typing
    )
  }
}
