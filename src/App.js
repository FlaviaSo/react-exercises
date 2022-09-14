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
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";

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
                <ClickCounter/>
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
                <div>
                    <TodoList/>
                </div>
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
                <Sum/>
                <GithubUser username={"FlaviaSo"}/>
                <GithubUserList/>
            </div>
        )
    }

}


//Component-08
/* Il componente "Hello può essere riutilizzato più volte nella componente "App", verrà renderizzato ogni volta. */

//Component-09
/* Se inserisco il componente "Message" all'interno del componente "App", il terminale mi da un errore.*/

