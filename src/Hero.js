import React, { Component } from 'react';

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  
    this.changeHandler = this.changeHandler.bind(this);
  }
  
  changeHandler(e) {
    this.props.onChange(e.target.value);
    this.setState({name: e.target.value});
  }
  
  render() {
    return(
      <div>
        <p>{this.state.name}</p>
        <label>name:
          <input placeholder="name" value={this.state.name} onChange={this.changeHandler}></input>
        </label>
      </div>
    )
  }
}