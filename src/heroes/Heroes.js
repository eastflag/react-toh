import React, { Component } from 'react';
import {HEROES} from "../mock-heroes";
import './Heroes.css';
import {connect} from "react-redux";
import {Link} from "react-router-dom";



class Heroes extends Component {
  constructor(props) {
   
    super(props);
    // this.state = {
    //   heroes: heroes,
    //   // selectedHero: null
    // };
    
    //this.changeHandler = this.changeHandler.bind(this);
  }
  
  render() {
    return (
      <div>
        <h2>My Heroes</h2>
        <ul className="heroes">
          {
            this.props.heroes.map(hero => {
              return (
                <li key={hero.id}>
                  <Link to={`/detail/${hero.id}`}>
                    <span className="badge">{hero.id}</span> {hero.name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
{/*
        {
          this.props.hero ? <Hero hero={this.props.hero}></Hero> : null
        }*/}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  console.log(state);
  return {
    heroes: state.heroReducer.heroes
  }
};

Heroes = connect(mapStateToProps)(Heroes);

export default Heroes;