import React, { Component } from 'react';

export default class Keypad extends Component {

    constructor(props) {
        super(props);
    }

    enteringPassword = ()=>(
        console.log('Entering password...')
    )
    

    render() {
        return (
            <div>
                <input type="password" 
                    onKeyUp = {this.enteringPassword}
                />
            </div>
        );
    }
}
