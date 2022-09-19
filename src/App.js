import React, { useState } from "react";
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
import { Formino } from "./Form";
import { CarDetails } from "./CarDetails";
import { UseCounterHook } from "./UseCounterHook"

export const LanguageContext = createContext('en')

export function App() {
    const [lang, setLang] = useState('en')

    function handleLanguage(e){
        setLang(e.target.value)
    }


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
                    <select onChange={handleLanguage} name="language">
                        <option value="en">English</option>
                        <option value="it">Italiano</option>
                    </select>
                    <LanguageContext.Provider value={lang}>
                        <DisplayLanguage/>
                    </LanguageContext.Provider>
                </div>
                <Sum/>
                <GithubUser username={"FlaviaSo"}/>
                <GithubUserList/>
                <Formino/>
                <CarDetails initialValue={{brand:"Fiat", model:"Panda 750", year:"1987", color:"red", price:"4500€"}}/>
                <UseCounterHook />
            </div>
        )
    }



//Component-08
/* Il componente "Hello può essere riutilizzato più volte nella componente "App", verrà renderizzato ogni volta. */

//Component-09
/* Se inserisco il componente "Message" all'interno del componente "App", il terminale mi da un errore.*/

