import React, { Component } from 'react';

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: props.hero
    };
  
    this.changeHandler = this.changeHandler.bind(this);
  }
  
  changeHandler(e) {
    console.log(this.state.hero);
    //this.props.onChange(e.target.value);
    /*this.setState(prevState => ({
      hero: {...this.prevState.hero, name: e.targt.value}
    }));*/
    let temp = Object.assign({}, ...this.state.hero, {name: e.target.value});
    this.setState({
      hero: temp
    });
    console.log(this.state.hero);
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