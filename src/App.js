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

/* Can you render the Message component directly within the App component? What happens if you do? */

/* Se inserisco il componente "Message" all'interno del componente "App", il terminale mi da un errore.*/