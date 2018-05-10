import React, {Component} from 'react';
import './App.css';
import Heroes from "./heroes/Heroes";
import {Route} from "react-router-dom";
import Home from "./home/Home";
import Hero from "./hero/Hero";
import Header from "./header/Header";
import Dashboard from "./dashboard/Dashboard";

class App extends Component {
  render() {
    const title = 'React App';
    console.log('App');
    return (
        <div>
          <Header/>
          <Route exact path="/" component={Home} />
          <Route path="/heroes" component={Heroes} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/detail/:id" component={Hero} />
        </div>
    );
  }
}

export default App;
