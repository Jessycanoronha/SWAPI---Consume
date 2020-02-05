import React, { Component } from 'react';
import Btns from './Btns';

class ButtonsInit extends Component{
  render(){
    return (
      <div className="content__menu hide">
           <Btns text="Start Game" path="/planets" />
           <Btns text="About" path="/abouttheapp" />
           <Btns text="Test Btn" path="/abouttheapp" />
    </div>
      )
  }

}

export default ButtonsInit;
