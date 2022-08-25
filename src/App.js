import React from "react";
import {Hello} from './Hello';

export class App extends React.Component{
    render(){
        return (
            <div>
                <Hello />
            </div>)
    }

}


//-08
/* Il componente "Hello può essere riutilizzato più volte nella componente "App", verrà renderizzato ogni volta. */

//-09
/* Se inserisco il componente "Message" all'interno del componente "App", il terminale mi da un errore.*/
