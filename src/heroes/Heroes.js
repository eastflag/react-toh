import React, { Component } from 'react';
import {HEROES} from "../mock-heroes";
import './Heroes.css';
import Hero from "../hero/Hero";
import {connect} from "react-redux";
import {changeHero} from "../actions";



class Heroes extends Component {
  constructor(props) {
    let heroes = HEROES;
    
    super(props);
    // this.state = {
    //   heroes: heroes,
    //   // selectedHero: null
    // };
    
    this.changeHandler = this.changeHandler.bind(this);
  }
  
  changeHandler(hero) {
    console.log('parent', hero);
    
    // name 변경
    // let newHeroes = this.state.heroes.map(h => {
    //   if (h.id === hero.id) {
    //     h.name = hero.name;
    //   }
    //   return h;
    // });
    
    //배열 주소는 변하지 않기 때문에 상태가 변하지 않는다. 배열주소를 변경한다.
    // this.setState({
    //   heroes: newHeroes
    // });
  }
  
  render() {
    return (
      <div>
        <h2>My Heroes</h2>
        <ul className="heroes">
          {
            this.props.heroes.map(hero => {
              return (
                <li key={hero.id} onClick={e => {
                  // this.setState({selectedHero: hero});
                  this.props.onChangeHero(hero);
                  // console.log(hero);
                }}>
                  <span className="badge">{hero.id}</span> {hero.name}
                </li>
              )
            })
          }
        </ul>
  
        {
          this.props.hero ? <Hero hero={this.props.hero}></Hero> : null
        }
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  console.log(state);
  return {
    hero: state.heroReducer.selectedHero,
    heroes: state.heroReducer.heroes
  }
};

let mapDispatchToProps = (dispatch) =>{
  return {
    onChangeHero: (hero) => dispatch(changeHero(hero))
  };
};

Heroes = connect(mapStateToProps, mapDispatchToProps)(Heroes);

export default Heroes;