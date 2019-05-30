import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import router from './router/router'
import './App.css';
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        { router }
      </div>
    );
  }
}

export default withRouter(App);
