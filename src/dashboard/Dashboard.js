import React from "react";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.history);
    console.log(props.location);
    console.log(props.match);
  }
  
  render() {
    return (
      <div>
        dashboard
      </div>
    );
  }
}