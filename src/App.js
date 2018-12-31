import React, { Component } from 'react';
import Navbar from  './componets/navbar/navbar';
import './App.scss';
import TourList from './componets/Tourlist';


class App extends Component {
  render() {
    return (
    <div>
      <Navbar />
      <TourList />
    </div>
    );
  }
}

export default App;
