import React, { Component } from 'react';
import Btns from '../components/Btns';


class About1 extends Component {
    render() {
        return (

            <div className="container">
            
                <div className="center">

                  <div className="card">
                    <div className="additional">
                      <div className="user-card">
                          <img src="https://res.cloudinary.com/jessycaroz/image/upload/v1581021330/chewbacca_icon-icons.com_76942_ddsjue.png" alt="helmet" />
                   </div>
                      <div className="more-info">
                        <h1 className="planet__name-description">About the app</h1>
                        <div className="coords">
                          <div>Star wars the game</div>
                        </div>
                        <div className="coords">
                          <div>Version 1.0.0</div>
                          <div>App desenvolvido usando:</div>
                          <div>React</div>
                          <div>React-router</div> 
                          <div>Axios</div>
                          <div>Jquery</div>
                          </div>
                      </div>
                      </div>
                      <div className="general">
                      <h1 className="planet__name">About the app</h1>
                      <span class="more">Mouse over the card for more info</span>
                    </div>
                    </div>
                </div>
            
              
                    <div className="planets__buttons">
                        <Btns text="< Back the game" path="/planets" />
                        <Btns text="Home" path="/" />
                        
                        
                        <Btns text="About" path="/about1" />
                        <Btns text="About Me" path="/aboutme"/>
                </div>
                </div>
         
        )
    }
}

export default About1
