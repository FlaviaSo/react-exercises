import React, { createRef } from "react";

export class TodoList extends React.Component {
  _inputRef = createRef();

  state = { todos: ["Voglio", "Mo", "Ri", "Re"] };

  handleTodoUpdate = (event) => {
    const name = event.target.name;
    const todo = this._inputRef.current.value;
    const reset = this._inputRef.current.value = "";

    this.setState(() => ({
      [name]: todo !== "" ? this.state.todos.push(todo) : reset,
    }));
  };

  render() {
    return (
      <>
        <ul>
          {this.state.todos.map((todos, index) => (
            <li key={todos + index}>{todos}</li>
          ))}
        </ul>

        <input ref={this._inputRef}></input>
        <button onClick={this.handleTodoUpdate}>Aggiungi Chore</button>
      </>
    );
  }
}