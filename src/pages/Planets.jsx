import React, { Component } from 'react';
import Btns from '../components/Btns';
import Loading from '../components/Loading';
import axios from 'axios';

class Planets extends Component {

    constructor(loading){
        super(loading);
        this.state = {
            planets: [],
            qtdFilms: 0,
            loading: false
        }
    }

    renderLoading() {
        if(this.state.loading === true) {
            return <Loading />

        } else {
            return null
        }
    }

    changeLoadingState() {
        this.setState((prevState) => {
            return {loading: !prevState.loading}
        });
    }

    randomPlanets() {
        this.changeLoadingState();

        let randomNumber = Math.floor(Math.random() * (61 - 1 + 1)) + 1;

        axios.get(`https://swapi.co/api/planets/${randomNumber}`)
        .then(response => {
            this.setState({planets: response.data, qtdFilms: response.data.films.length})
        })
        .catch(function(error){
            console.log(error);
        });

        setTimeout(()=>{
            this.changeLoadingState();
        }, 1000);
    }

    componentDidMount() {
        this.randomPlanets();
    }

    render(){
        return(

            <div className="container">
            
                <div className="center">

                  <div className="card">
                    <div className="additional">
                      <div className="user-card">
                          <img src="https://res.cloudinary.com/jessycaroz/image/upload/v1581003120/star-wars-clipart-r2d2-4_t3bh2v.png" height="80%" alt=" "/>
                            </div>
                      <div className="more-info">
                        <h1 className="planet__name-description">{this.state.planets.name}</h1>
                        <div className="coords">
                          <div>Planet name: {this.state.planets.name}</div>
                          <div>Climate: {this.state.planets.climate}</div>
                        </div>
                        <div className="coords">
                          <div>Terrain :</div>
                          <div className="coords__terrain"> {this.state.planets.terrain}</div>
                          <div>Rotation period: {this.state.planets.rotation_period}</div>
                          <div className="planet__featured">Featured in {this.state.qtdFilms} {this.state.qtdFilms <= 1 ? 'film': 'films'}</div>
                        </div>
                      </div>
                      </div>
                      <div className="general">
                      <h1 className="planet__name">{this.state.planets.name}</h1>
                      <span class="more">Mouse over the card for more info</span>
                    </div>
                    </div>
                    {this.renderLoading()}
                </div>
            
              
                    <div className="planets__buttons">
                        <Btns text="Home" path="/" />
                        <button onClick={()=>this.randomPlanets()} className="button">Next</button>
                        <Btns text="About" path="/about1" />
                        <Btns text="About Me" path="/aboutme"/>
                </div>
                </div>
                
        )
    }
}

export default Planets