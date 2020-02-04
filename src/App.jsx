import React, { Component } from 'react';
import Image from './components/Logo';
import './scss/App.scss';

class App extends Component{
  render(){
    return (
      <div className="App">
        <div class="stars"></div>
        <div class="twinkling"></div>
        <div class="clouds"></div>
        <div className="container">
          <Logo/>
        </div>
    </div>
      );
  }
}

export default App;
