// Code EyesOnMe Component import React, { Component } from 'react';
import React, { Component } from 'react';

class EyesOnMe extends Component {
    
    isFocused = () => {
        console.log('Good!')
      }
    
      isBlurred = () => {
        console.log('Hey! Eyes on me!')
      }
    
      render() {
        const message = this.isBlurred ? this.isBlurred() : this.isFocused()
        return (
          <button onFocus={this.isFocused} onBlur={this.isBlurred}>{message}</button>
        )
      }
    
}

export default EyesOnMe;
