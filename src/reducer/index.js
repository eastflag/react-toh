import {CHANGE_HERO, SET_HERO} from "../actions";
import {combineReducers} from "redux";
import {HEROES} from "../mock-heroes";

const heroInitialState = {
  selectedHero: null,
  heroes: HEROES
};

const heroReducer = (state = heroInitialState, action) => {
  switch(action.type) {
    case CHANGE_HERO:
      // let tempHero = Object.assign({}, state.selectedHero);
      let newHeroes = state.heroes.map(h => {
        if (h.id === action.hero.id) {
          h.name = action.hero.name;
        }
        return h;
      });
      return {selectedHero: action.hero, heroes: newHeroes};
    
    case SET_HERO:
      console.log(state);
      state.heroes.map(hero => {
        if (hero.id === action.id) {
          state.selectedHero = hero;
        }
      });
      return {hero: state.selectedHero};
      
    default:
      return heroInitialState;
  }
};

const heroApp = combineReducers({
  heroReducer
});

export default heroApp;