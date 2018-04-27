import React, { Component } from 'react';
import {HEROES} from "./mock-heroes";

const hero = {
  id: 1,
  name: 'WinStorm'
};

const heroes = HEROES;

class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: hero
    };
    this.onChange = this.onChange.bind(this);
  }

  
  onChange(e) {
    hero.name = e.target.value;
    console.log(hero);
    this.setState({
      hero: hero
    });
  }
  
  render() {
    return (
      <div>
        <h2>My Heroes</h2>
        <ul className="heroes">
          {
            heroes.map(hero => {
              return (
                <li key={hero.id}>
                  <span className="badge">{hero.id}</span> {hero.name}
                </li>
              )
            })
          }
        </ul>
        
        <div>
          <label>name:
            <input placeholder="name" value={this.state.hero.name} onChange={this.onChange}></input>
          </label>
        </div>
      </div>
    );
  }
}

export default Heroes;