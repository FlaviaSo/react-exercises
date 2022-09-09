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
        <div class="bg-orange-100 flex flex-col content-center">
            <ul class="bg-white w-[150px] self-center list-decimal flex flex-col border-2 border-black border-dashed">
                {this.state.todos.map((todos, index) => (
                    <li key={index} class="font-bold flex justify-between mx-1">
                        {todos}
                        <button class="w-[60px] bg-red-900 hover:bg-red-500 border font-normal text-xs text-white " onClick={() => this.handleRemoveButton(todos)}>Remove</button>
                    </li>
                ))}
            </ul>

            <input class="w-[150px] self-center border-2 border-black" ref={this._inputRef}></input>
            <button class="w-[150px] h-[25px] self-center bg-red-900 hover:bg-red-500 border font-normal text-xs text-white" onClick={this.handleTodoUpdate}>Aggiungi Chore</button>
            <button class="w-[150px] h-[25px] self-center bg-white hover:bg-slate-400 border font-semibold text-lg flex justify-center" type="reset" onClick={this.handleResetButton}><span class="self-center">Reset</span></button>
        </div>
    );
}
}