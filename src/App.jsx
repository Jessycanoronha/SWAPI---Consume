import React, { Component } from 'react';
import ImageLogo from './components/ImageLogo';
import SvgBackg from './components/SvgBackg';
import ButtonsInit from './components/ButtonsInit';
import Parallax from './components/Parallax';


import './scss/App.scss';

class App extends Component{
  render(){
    return (
      <div className="App">
          <div className="container">
                <ImageLogo />
                <SvgBackg />
                <Parallax/>
                <ButtonsInit />
          </div>
      </div>
      );
  }

}

export default App;
