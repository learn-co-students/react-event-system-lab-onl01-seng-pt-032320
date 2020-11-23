import React, { Component } from 'react'

export default class EyesOnMe extends Component {

    focusOnMe = () => {
        console.log('Good!')
    }

    keepYourFocusPlease = () => {
        console.log('Hey! Eyes on me!')
    }
    render() {
        return (
            <div>
                <button type="button" onFocus={this.focusOnMe} onBlur={this.keepYourFocusPlease}>Keep Your Focus</button>
            </div>
        )
    }
}
