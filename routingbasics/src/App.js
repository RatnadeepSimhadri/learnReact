import React, { Component } from 'react';
import {BrowserRouter as Router , Route , Link} from 'react-router-dom'
import './App.css';
import { Home , About}from './components';
class App extends Component {
  render() {
    return (
     <Router>
       <Route exact path="/" component={Home} />
       <Route path={'/about'} component={About}/>

     </Router>
    );
  }
}

export default App;
