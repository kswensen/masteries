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

// Custom web semantics for me are words that describe what a variable is or what it is used for. Examples: var firstName, var difference, etc.
// Web semantics refers to adding meaning to your naming conventions. For example, naming a variable something that pertains to what it does.
// The Goal is to get everyone to use Web Semantics in their code so anyone can read the code and understand what each variable does. 
// The purpose is so that someone can look at another person's code and be able to tell what a variable is based on its name.
// Best practices would be: var firstName = 'Kegan'; var sum = 20; etc.

// Doctypes change how a browser reads the file because in the doctype you declare what html is being used to render the page.