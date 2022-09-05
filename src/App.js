import React from "react";
import {Hello} from './Hello';
import {Welcome} from './Welcome';
import {Counter} from './Counter'

export class App extends React.Component{
    render(){
        return (
            <div>
                <Hello />
                <Welcome age={27}/>
                <Counter/>
            </div>
            )
    }

}


//Component-08
/* Il componente "Hello può essere riutilizzato più volte nella componente "App", verrà renderizzato ogni volta. */

//Component-09
/* Se inserisco il componente "Message" all'interno del componente "App", il terminale mi da un errore.*/

