import React, { Component } from 'react';
import {connect} from "react-redux";
import {changeHero, setHero} from "../actions";

export class Hero extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   hero: props.hero
    // };
  
    console.log(props.match.params.id);
    // params 의 id로 selectedHero 세팅
    //this.props.onSetHero(props.match.params.id);
  
    this.changeHandler = this.changeHandler.bind(this);
  }
  
  // 부모가 selectedHero가 변경시 자식 컴포넌트 변경
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
    // this.setState({ hero: nextProps.hero });
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState);
  }
  
  changeHandler(e) {
    console.log(this.props.hero);

    /*this.setState(prevState => ({
      hero: {...this.prevState.hero, name: e.targt.value}
    }));*/
    let tempHero = Object.assign({}, this.props.hero, {name: e.target.value});
    console.log(tempHero);
    // this.setState({
    //   hero: temp
    // });
    
    // selectedHero 변경사항 dispatch
    this.props.onChangeHero(tempHero);
    
    //
  }
  
  render() {
    return(
      <div>
        <p>{this.props.hero.id}</p>
        <p>{this.props.hero.name}</p>
        <label>name:
          <input placeholder="name" value={this.props.hero.name} onChange={this.changeHandler}></input>
        </label>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  console.log(state);
  return {
    hero: state.heroReducer.selectedHero
  }
};

let mapDispatchToProps = (dispatch) =>{
  return {
    onSetHero: (id) => dispatch(setHero(id)),
    onChangeHero: (hero) => dispatch(changeHero(hero))
  };
};

Hero = connect(mapStateToProps, mapDispatchToProps)(Hero);

export default Hero;