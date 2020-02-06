import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About1 from './pages/About1';
import Planets from './pages/Planets';
import AboutMe from './pages/AboutMe';


import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/about1" exact={true} component={About1} />
				<Route path="/aboutme" exact={true} component={AboutMe} />
                <Route path="/planets" exact={true} component={Planets} />

                
            </Switch>
        </BrowserRouter>
        , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();