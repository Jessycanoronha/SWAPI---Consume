import React, { Component } from 'react';
import Btns from '../components/Btns';


class About1 extends Component {
    render() {
        return (
        <div className="card">
            <div className="left">
                <img className="wordmark" src="http://res.cloudinary.com/prvnbist/image/upload/v1508603572/starwars.png" alt="star wars" />
            </div>
            <div className="right"><img class="helmet" src="https://res.cloudinary.com/jessycaroz/image/upload/v1581021330/chewbacca_icon-icons.com_76942_ddsjue.png" alt="helmet" />
                <div className="productInfo">
                    <h1>About the app</h1>
                    <h4>Star Wars the game</h4>

                    <div className="details">
                        <h6>Version 1.0.0</h6>
                        <h6>App desenvolvido usando React,React-router ,Axios, Jquery</h6>                     
                       
                    </div><button>MORE ABOUT ME</button>

                </div>
                <div className="planets__buttons">
                        <Btns text="Home" path="/" />
                        <Btns text="About Me" path="/aboutme"/>


                </div>
            </div>
        </div>
         
        )
    }
}

export default About1
