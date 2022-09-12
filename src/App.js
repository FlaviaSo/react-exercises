import React from "react";
import {Hello} from './Hello';
import {Welcome} from './Welcome';
import {Counter} from './Counter'
import {ClickCounter} from "./ClickCounter";
import {ClickTracker} from "./ClickTracker"
import {InteractiveWelcome} from "./InteractiveWelcome"
import {Login} from "./Login"
import { UncontrolledLogin } from "./UncontrolledLogin";
import {Colors} from "./Colors"
import {TodoList} from "./TodoList";
import {Container} from "./Container"

export class App extends React.Component{
    render(){
        return (
            <div>
                <Hello />
                <Welcome name={"Flavia"} age={27}/>
                <Counter initialValue={0} incrementBy={1} timeout={1000}/>
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
                <Colors items={[{id:1,name:'Red'}, {id:2,name:'Green'}, {id:3, name:'Blue'}]}/>
                <TodoList />
                <Container>
                    <Hello/>
                </Container>
            </div>
            )
    }

}


//Component-08
/* Il componente "Hello può essere riutilizzato più volte nella componente "App", verrà renderizzato ogni volta. */

//Component-09
/* Se inserisco il componente "Message" all'interno del componente "App", il terminale mi da un errore.*/

