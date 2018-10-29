import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './containers/Home';
import './assets/css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <Route path="/" component={Home} />
      </Router>
    );
  }
}

export default App;
