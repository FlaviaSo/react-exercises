import React from "react";
import { Hello } from './Hello';
import { Welcome } from './Welcome';
import { Counter } from './Counter'
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker"
import { InteractiveWelcome } from "./InteractiveWelcome"
import { Login } from "./Login"
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Colors } from "./Colors"
import { TodoList } from "./TodoList";
import { Container } from "./Container";
import { Message } from "./Message"
import { createContext } from 'react';
import { DisplayLanguage } from "./DisplayLanguage";
import { Sum } from "./Sum";

export const LanguageContext = createContext('en')

export class App extends React.Component {
    state = {
        language: 'en'
    }

    handleLanguage = e => {
        this.setState({
            language: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Hello />
                <Welcome/>
                <Counter initialValue={0} incrementBy={1} timeout={1000} />
                <ClickCounter />
                <ClickTracker />
                <div>
                    <br></br>
                    <InteractiveWelcome />
                </div>
                <div>
                    <Login />
                </div>
                <br></br>
                <div>
                    <UncontrolledLogin />
                </div>
                <Colors items={[{ id: 1, name: 'Red' }, { id: 2, name: 'Green' }, { id: 3, name: 'Blue' }]} />
                <TodoList>
                    {({ todos, handleTodoUpdate, handleResetButton, handleRemoveButton, _inputRef }) => {
                        return (
                            <>
                                <div class="border border-danger border-3 p-3 m-2 w-25 d-flex flex-column align-items-center justify-content-center">
                                    <ul class="list-group-flush list-group-numbered">
                                        {todos.map((todos, index) => (
                                            <>
                                            <li key={index} class="d-flex flex-row justify-content-between p-1 list-group-item">
                                                {todos}
                                                <button class="btn btn-danger" onClick={() => handleRemoveButton(todos)}>Remove</button>
                                            </li>
                                            </>
                                        ))}
                                    </ul>
                                    <div>
                                        <input class="" ref={_inputRef}></input>
                                        <button class="btn btn-danger" onClick={handleTodoUpdate}>Aggiungi Chore</button>
                                        <button class="btn btn-danger" type="reset" onClick={handleResetButton}><span class="aligh-self-center">Reset</span></button>
                                    </div>
                                </div>
                            </>)
                    }}
                </TodoList>
                <Container title={"Hola, Amigos!"}>
                    <Message />
                </Container>
                <div>
                    <select value={this.state.language} onChange={this.handleLanguage} name="language">
                        <option value="en">English</option>
                        <option value="it">Italiano</option>
                    </select>
                    <LanguageContext.Provider value={this.state.language}>
                        <DisplayLanguage/>
                    </LanguageContext.Provider>
                </div>
                <Sum numbers={[1,2,3,4,5]}/>
            </div>
        )
    }

}


//Component-08
/* Il componente "Hello può essere riutilizzato più volte nella componente "App", verrà renderizzato ogni volta. */

//Component-09
/* Se inserisco il componente "Message" all'interno del componente "App", il terminale mi da un errore.*/

