import React, { Component } from 'react';
import {HEROES} from "../mock-heroes";
import './Heroes.css';
import Hero from "../hero/Hero";

const heroes = HEROES;

class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHero: null
    };
    
    this.onClick = this.onClick.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }
  
  onClick(hero) {
    console.log(hero);
    // this.setState({
    //   selectedHero: e.tar
    // });
  }
  
  changeHandler(name) {
    console.log('parent', name);

    this.setState(prevState => ({
      selectedHero: {
        ...prevState.selectedHero, name: name
      }
    }));
  }
  
  render() {
    return (
      <div>
        <h2>My Heroes</h2>
        <ul className="heroes">
          {
            heroes.map(hero => {
              return (
                <li key={hero.id} onClick={e => this.setState({selectedHero: hero})}>
                  <span className="badge">{hero.id}</span> {hero.name}
                </li>
              )
            })
          }
        </ul>
  
        {
          this.state.selectedHero ? <Hero name={this.state.selectedHero.name} onChange={this.changeHandler}></Hero> : ''
        }
      </div>
    );
  }
}

export default Heroes;