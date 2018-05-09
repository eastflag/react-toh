import React, { Component } from 'react';
import {connect} from "react-redux";

export class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: props.hero
    };
  
    this.changeHandler = this.changeHandler.bind(this);
    console.log(props);
  }
  
  // 부모가 selectedHero가 변경시 자식 컴포넌트 변경
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
    this.setState({ hero: nextProps.hero });
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState);
  }
  
  changeHandler(e) {
    console.log(this.state.hero);

    /*this.setState(prevState => ({
      hero: {...this.prevState.hero, name: e.targt.value}
    }));*/
    let temp = Object.assign({}, this.state.hero, {name: e.target.value});
    console.log(temp);
    this.setState({
      hero: temp
    });
    console.log(this.state.hero);
    
    // 부모 컴포넌트 업데이트 함수 호출
    this.props.onChange(temp);
  }
  
  render() {
    return(
      <div>
        <p>{this.state.hero.id}</p>
        <p>{this.state.hero.name}</p>
        <label>name:
          <input placeholder="name" value={this.state.hero.name} onChange={this.changeHandler}></input>
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

Hero = connect(mapStateToProps)(Hero);

export default Hero;