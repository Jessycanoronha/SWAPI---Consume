import React, { Component } from 'react';
import $ from 'jquery';

class LongTime extends Component {

    constructor() {
        super();
        this.state = {
            text: 'Pesquisando em uma galáxia muito, muito distante....',
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
                    </div>
                </div>
            </div>
        )
    }
}

export default LongTime