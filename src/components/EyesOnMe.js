import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  whenFocus = () => { console.log('Good!'); }
  whenBlur = () => { console.log('Hey! Eyes on me!'); }
    
  render() {
    return (
      <button onFocus={this.whenFocus} onBlur={this.whenBlur}>Button</button>
    )
  }

}