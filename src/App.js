import React, {Component} from 'react';
import './App.css';
import Heroes from "./heroes/Heroes";

class App extends Component {
  render() {
    const title = 'React App';
    return (
      <div className="App">
        <h1>{title}</h1>
        <Heroes></Heroes>
      </div>
    );
  }
}

export default App;
