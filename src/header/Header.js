import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";
import './Header.css';

const activeStyle = {
  color: 'green',
  fontWeight: 'bold'
};

class Header extends React.Component {
    
    render() {
        return (
          <Fragment>
            <h1>Tour Of Heroes</h1>
            <ul className="header">
              <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
              <li><NavLink exact to="/dashboard" activeStyle={activeStyle}>Dashboard</NavLink></li>
              <li><NavLink exact to="/heroes" activeStyle={activeStyle}>Heroes</NavLink></li>
            </ul>
          </Fragment>
        );
    }
}

export default Header;