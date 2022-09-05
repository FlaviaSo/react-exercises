import React from "react";
import {Hello} from './Hello';
import {Welcome} from './Welcome';
import {Counter} from './Counter'
import {ClickCounter} from "./ClickCounter";
import {ClickTracker} from "./ClickTracker"
import {InteractiveWelcome} from "./InteractiveWelcome"

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
                <InteractiveWelcome />
                </div>
            </div>
            )
    }

}


//Component-08
/* Il componente "Hello può essere riutilizzato più volte nella componente "App", verrà renderizzato ogni volta. */

//Component-09
/* Se inserisco il componente "Message" all'interno del componente "App", il terminale mi da un errore.*/

