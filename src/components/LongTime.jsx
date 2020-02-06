import React, { Component } from 'react';
import $ from 'jquery';

class LongTime extends Component {

    constructor() {
        super();
        this.state = {
            text: 'Buscando dados em uma galáxia muito, muito distante....',
        }
    }

    componentDidMount() {
        let screenWidth = window.innerWidth;
        setTimeout(() => {
            $('.LongTime__container').fadeOut(200);
        }, 5000);
        if (screenWidth >= 1024) {
            setTimeout(() => {
                $('.app__logo').removeClass('big');
            }, 8000);
        }
        setTimeout(() => {
            $('.content__menu').removeClass('hide');
        }, 9000);
    }

    render() {
        return (
            <div className="LongTime__container">
                <div className="LongTime__background">
                    <div className="LongTime__text">
                        {this.state.text}
                       <div class="sk-cube-grid">
                          <div class="sk-cube sk-cube1"></div>
                          <div class="sk-cube sk-cube2"></div>
                          <div class="sk-cube sk-cube3"></div>
                          <div class="sk-cube sk-cube4"></div>
                          <div class="sk-cube sk-cube5"></div>
                          <div class="sk-cube sk-cube6"></div>
                          <div class="sk-cube sk-cube7"></div>
                          <div class="sk-cube sk-cube8"></div>
                          <div class="sk-cube sk-cube9"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LongTime