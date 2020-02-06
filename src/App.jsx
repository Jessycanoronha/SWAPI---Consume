import React, { Component } from 'react';
import ImageLogo from './components/ImageLogo';
import SvgBackg from './components/SvgBackg';
import ButtonsInit from './components/ButtonsInit';
import MusicIntro from './components/MusicIntro';
import LongTime from './components/LongTime';
import Parallax from './components/Parallax';

import './scss/Style.scss';

class App extends Component {

  renderIntro(){
    let screenWidth = window.innerWidth;
    if(screenWidth >= 1024){
      return(
        <div>
          <MusicIntro />
          <LongTime />
        </div>
      )
    }
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
            <ImageLogo/>
            <SvgBackg />
            <ButtonsInit />
            <Parallax />
            {this.renderIntro()}
        </div>
      </div>
    );
  }
}

export default App