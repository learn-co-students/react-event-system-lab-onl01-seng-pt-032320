import React from 'react'

export default class Keypad extends React.Component {
    
    
    handleKeyPad = (event)=>{
        console.log(`Entering key letter:  ${event.key}`)
    }
    
    render(){
        return (
            <div>
                 <input onKeyUp={this.handleKeyPad}  />
            </div>
        )
    }
}

