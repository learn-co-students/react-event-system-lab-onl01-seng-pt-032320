import React from 'react';

 class Keypad extends React.Component {


    Password = () => {
        console.log('Entering password...')
    }

    render(){
        return (
            <div>
            <input onKeyUp={this.Password} type="password" />
            </div>
        )
    }
}

export default Keypad;