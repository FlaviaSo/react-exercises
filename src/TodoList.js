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
            todos: (state.todos = [])
        }))
    }

    handleRemoveButton = item => {
        this.setState(state =>({
            todos: state.todos.filter(el => el !== item)
        }))
    }


render() {
    return this.props.render({
        todos: this.state.todos,
        _inputRef: this._inputRef,
        handleTodoUpdate: this.handleTodoUpdate,
        handleResetButton: this.handleResetButton,
        handleRemoveButton: this.handleRemoveButton
    })
    /*return (
        <div class="border border-danger border-3 p-3 m-2 w-25 d-flex flex-column align-items-center justify-content-center">
            <ul class="list-group-flush list-group-numbered">
                {this.state.todos.map((todos, index) => (
                    <li key={index} class="d-flex flex-row justify-content-between p-1 list-group-item">
                        {todos}
                        <button class="btn btn-danger" onClick={() => this.handleRemoveButton(todos)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div>
            <input class="" ref={this._inputRef}></input>
            <button class="btn btn-danger" onClick={this.handleTodoUpdate}>Aggiungi Chore</button>
            <button class="btn btn-danger" type="reset" onClick={this.handleResetButton}><span class="aligh-self-center">Reset</span></button>
            </div>
        </div>
    );*/
}
}