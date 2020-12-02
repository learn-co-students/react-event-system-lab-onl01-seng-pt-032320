// Code EyesOnMe Component Here
import React from 'react';

 class EyesOnMe extends React.Component {
  
    Focus = () => console.log("Good!")
    
    Blur = () =>  console.log("Hey! Eyes on me!")
    
    render(){
        return(
         <button onBlur={this.Blur} onFocus={this.Focus}>Eyes on me, please!</button>
        )   
    }
}

export default EyesOnMe;