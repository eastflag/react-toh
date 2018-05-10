import React, {Component} from 'react';
import './App.css';
import Heroes from "./heroes/Heroes";
import {Route} from "react-router-dom";
import Home from "./home/Home";
import Hero from "./hero/Hero";
import Header from "./header/Header";
import Dashboard from "./dashboard/Dashboard";

// history 이 객체를 통해 push, replace 를 통해 다른 경로로 이동하거나 앞 뒤 페이지로 전환 할 수 있습니다.
// location 이 객체는 현재 경로에 대한 정보를 지니고 있고 URL 쿼리 (/about?foo=bar 형식) 정보도 가지고있습니다.
// match 이 객체에는 어떤 라우트에 매칭이 되었는지에 대한 정보가 있고 params (/about/:name 형식) 정보를 가지고있습니다.

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
