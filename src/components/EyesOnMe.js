// Code EyesOnMe Component Here
import React, { Component} from 'react';

export default class EyesOnMe extends React.Component{

    constructor(){
        super()
    }

    onFocus = (event) => {
        console.log('Good!');
    }

    onBlur = (event) => {
        console.log('Hey! Eyes on me!');
    }

    render(){
        return (
        <button onFocus={this.onFocus} onBlur={this.onBlur}>focus</button>
        )
    }
}

{/* <Keypad />
✓ should have one input
✓ should have the right input type
Entering password...
✓ should trigger console output when typing (42ms)

<EyesOnMe />
✓ should have one button
Good!
✓ should trigger console output when focusing
Hey! Eyes on me!
✓ should trigger console output when removing focus (blur) */}
