import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './semantic/dist/semantic.min.css';
import Footer from './Footer/Footer.js';
import Homepage from './Homepage/Homepage'
import Navbar from './Heading/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
       
        <Homepage/>

        <Footer/>
      </div>
    );
  }
}

export default App;
