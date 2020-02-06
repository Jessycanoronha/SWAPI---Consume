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

            <div className="card" >
            
                        <div className="left"> <img className="wordmark" src="http://res.cloudinary.com/prvnbist/image/upload/v1508603572/starwars.png" alt="star wars" />
                   </div>
                <div className="right">
                <img className="helmet" src="http://res.cloudinary.com/jessycaroz/image/upload/v1581003120/star-wars-clipart-r2d2-4_t3bh2v.png" alt="helmet" height="480px" width="480px"/>
                <div className="productInfo">
                        <h1 className="">{this.state.planets.name}</h1>
                        <h4><label>Population:</label> {this.state.planets.population}</h4>
                        <h4><label>Climate:</label> {this.state.planets.climate}</h4>
                        <h4><label>Terrain:</label> {this.state.planets.terrain}</h4>

                        <h4><label>Rotation period:</label> {this.state.planets.rotation_period}</h4>
                        <h4><label>Surface Water:</label> {this.state.planets.surface_water}</h4>
                        <h6><label>Featured in</label> {this.state.qtdFilms} <label>{this.state.qtdFilms <= 1 ? 'film': 'films'}</label></h6>
                
                        {this.renderLoading()}
                    
                    </div>
                    <div className="planets__buttons">
                        <Btns text="Home" path="/" />
                        <button onClick={()=>this.randomPlanets()} className="button">Next</button>
                        <Btns text="About" path="/about1" />
                        <Btns text="About Me" path="/aboutme"/>
                </div>
                </div>
                
            </div>
        )
    }
}

export default Planets