import React, { Component } from 'react';
import Btns from './Btns';

class ButtonsInit extends Component{
  render(){
    return (
      <div className="content__menu hide">
           <Btns text="Start Game" path="/planets" />
           <Btns text="About the app" path="/about1" />
           <Btns text="About me" path="/aboutme" />
           <Btns text="Motivation" path="/motivation" />

    </div>
      )
  }

}

export default ButtonsInit;
