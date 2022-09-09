import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



export class CounterButton extends React.Component {
  render() {
    return <button onClick={this.props.counterIncrement}>Increment</button>;
  }
}