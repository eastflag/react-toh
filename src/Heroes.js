import React, { Component } from 'react';

class Heroes extends Component {
    render() {
        const hero = {
          id: 1,
          name: 'WinStorm'
        };
        return (
          <div>
            <p>{hero.id}</p>
            <span>{hero.name}</span>
          </div>
        );
    }
}

export default Heroes;