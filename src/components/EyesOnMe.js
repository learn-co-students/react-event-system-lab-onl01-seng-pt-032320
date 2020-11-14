import React, { Component } from 'react';

class EyesOnMe extends Component {

    constructor(props) {
        super(props);
    }

    focus = () => (
        console.log('Good!')
    )

    blur = () => (
        console.log('Hey! Eyes on me!')
    )
    

    render() {
        return (
            <div>
                <button 
                    onFocus = {this.focus}
                    onBlur = {this.blur}
                />
            </div>
        );
    }
}

export default EyesOnMe;