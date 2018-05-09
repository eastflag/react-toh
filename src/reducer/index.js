import {CHANGE_HERO} from "../actions";
import {combineReducers} from "redux";

const heroInitialState = {
  selectedHero: null
};

const heroReducer = (state = heroInitialState, action) => {
  switch(action.type) {
    case CHANGE_HERO:
      // let tempHero = Object.assign({}, state.selectedHero);
      return {selectedHero: action.hero};
    default:
      return heroInitialState;
  }
};

const heroApp = combineReducers({
  heroReducer
});

export default heroApp;