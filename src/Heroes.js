import React, { Component } from 'react';

const hero = {
  id: 1,
  name: 'WinStorm'
};

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
        <p>{hero.id}</p>
        <span>{hero.name}</span>
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