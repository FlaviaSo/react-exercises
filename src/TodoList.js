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

    handleResetButton = () => {
        this.setState((state) => ({
            todos: (state.todos = [""])
        }))
    }

    handleRemoveButton = item => {
        this.setState(state =>({
            todos: state.todos.filter(el => el !== item)
        }))
    }


render() {
    return (
        <>
            <ul>
                {this.state.todos.map((todos, index) => (
                    <li key={index}>
                        {todos}
                        <button onClick={() => this.handleRemoveButton(todos)}>Remove</button>
                    </li>
                ))}
            </ul>

            <input ref={this._inputRef}></input>
            <button onClick={this.handleTodoUpdate}>Aggiungi Chore</button>
            <button type="reset" onClick={this.handleResetButton}>Reset</button>
        </>
    );
}
}