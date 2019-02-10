import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import router from './router/router'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {router}
      </div>
    );
  }
}

export default withRouter(App);
