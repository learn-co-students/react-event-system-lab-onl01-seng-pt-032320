import React, { Component } from 'react'

export default class Keypad extends Component {

    passwordInput = () => {
        console.log("Entering password...")
    }
    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.passwordInput}></input>
            </div>
        )
    }
}

