import React, { Component }from 'react'


class Keypad extends Component{
    constructor(props){
        super(props)
        this.keyHandle = this.keyHandle.bind(this)

    }
    
     keyHandle(){
       
        console.log('Entering password...')
    }

    render(){
        return(
            <input type='password'  onKeyUp={this.keyHandle} placeholder='Enter Password'/>
        )
    }
}

export default Keypad;