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

/* Can you use the Hello component more than once in the App component? What happens if you do? */

/* Il componente "Hello può essere riutilizzato più volte nella classe "App", ma, creando classi diverse e utilizzando il componente "Hello", questo verrà renderizzato solo una volta. */