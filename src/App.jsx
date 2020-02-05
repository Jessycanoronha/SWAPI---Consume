import React, { Component } from 'react';
import ImageLogo from './components/ImageLogo';
import ImageBackg from './components/ImageBackg';

import './scss/ImageBackg.scss';

import './scss/App.scss';

class App extends Component{
  render(){
    return (
      <div className="App">
          <div className="container">
                <ImageLogo/>

                <ImageBackg/>
    </div>
                
    </div>
      );
  }

}

export default App;
