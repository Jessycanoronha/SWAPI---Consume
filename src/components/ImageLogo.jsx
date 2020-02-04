import React, { Component } from 'react';
import Logo from '../assets/logo.png';

class ImageLogo extends Component{
	render(){
		return(
			<img className="app__logo big" src={Logo} alt="Welcome the game"/>

		)
	}

}

export default ImageLogo;