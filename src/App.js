import React, {Component} from 'react';
import './App.css';
import Heroes from "./heroes/Heroes";
import {Route, Router, Switch} from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";

class App extends Component {
  render() {
    const title = 'React App';
    return (
        <Router>
            <Header></Header>
            <Switch>
                <Route exact path="/" Component={Home}></Route>
                <Route path="/heroes" Component={Heroes}></Route>
            </Switch>
        </Router>
    );
  }
}

export default App;
