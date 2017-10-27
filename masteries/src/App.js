import React, { Component } from 'react';
import Nav from './Components/Nav/Nav';
import router from './router';
import './App.css';
import './reset.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {router}
      </div>
    );
  }
}

export default App;
