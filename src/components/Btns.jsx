import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Btns extends Component {
    render() {
        return (
            <Link className="button" to={this.props.path}>{this.props.text}</Link>
        )
    }
}

export default Btns