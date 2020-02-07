import React, { Component } from 'react';
import Btns from '../components/Btns';

class Motivation extends Component{
  render(){
    return (
       <span>
        <h1>GIT</h1>
        <p>May the --force be with you</p>
        <h1>PUSH</h1>
        <div className="buttons">
                        <Btns text="Home" path="/" />
                        <Btns text="About Me" path="/aboutme"/>


                </div>
      </span>  
            )
  }

}

export default Motivation
