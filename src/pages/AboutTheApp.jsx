import React, { Component } from 'react';
import Btns from '../components/Btns';

class AboutTheApp extends Component {
    render() {
        return (
            <div className="about__container">
                <div className="about__content">
                    <h1 className="about__title">
                        About The App
                    </h1>
                    <p><a href="http://somos.b2wdigital.com/">B2W Digital</a> proposed me this challenge to create a game that shows a random planet and its characteristics like: population, climate, terrain and in how many films this planet has been featured in.</p>
                    <p>To make this game, I used the following stack:</p>
                    <ul>
                        <li>React</li>
                        <li>Axios</li>
                        <li>CSS (SCSS)</li>
                        <li>Netlify</li>
                        <li>And a bit (just a little bit) of jQuery</li>
                    </ul>
                </div>

                <div className="about__buttons">
                    <Btns text="Play Game" path="/planets" />
                    <Btns text="Home" path="/" />
                    <Btns text="About Me" path="/about" />
                </div>
            </div>
        )
    }
}

export default AboutTheApp