import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Entity from './containers/Entity';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
          <div>
            <Switch>
              <Route exact path = "/" component = {Entity} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
