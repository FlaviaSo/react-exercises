import React, { useState } from 'react';

export function TodoList() {
    let [todos, setTodos] = useState(["Volgio", "Mo", "Ri", "Re"])

    function handleTodoUpdate(e) {
        e.preventDefault();
        setTodos(todos => (
                todos = [...todos, e.target.elements.addChore.value]
        ))
    }

    return (
        <>
            <ul>
                {todos.map((todos, index) => <li key={index}>{todos}</li>)}
            </ul>
            <form onSubmit={handleTodoUpdate}>
                <input name="addChore" type="text"/>
                <button type="submit">Add</button>
            </form>
        </>
    )
}