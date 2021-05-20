// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import Filter from './components/Filter.js';
// import Image from './components/Image.js';

class App extends Component {
  render() {
    return (
      <div>
        <Filter />
      </div>
    );
  }
}

export default App;
