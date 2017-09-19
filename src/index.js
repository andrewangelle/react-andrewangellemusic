import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from './containers/Home.js';
import About from './containers/About.js';
import Music from './containers/Music.js';
import Teaching from './containers/Teaching.js';
import Performances from './containers/Performances.js';
import Contact from './containers/Contact.js';
import './assets/styles/global.css';
import './styles/index.css';


const history = createHistory();

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/music' component={Music} />
            <Route exact path='/teaching' component={Teaching} />
            <Route exact path='/performances' component={Performances} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
