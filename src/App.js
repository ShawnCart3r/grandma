import React, { Component } from 'react';
import Navbar from "./Component/Navbar";
import Main from "./Section/Main";
import About from "./Section/About";
import Contact from "./Section/Contact";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Main/>
        <About/>
        <Contact/>
      </div>
    );
  }
}



export default App;
