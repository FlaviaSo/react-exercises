import React from 'react';

export class Counter extends React.Component {
    state = {
        count : 0,
    }

    constructor(props){
        super(props)

        setInterval(() => {
            this.setState({
                count: this.state.count + 1,
            });
        }, 1000);
    }

    render(){
        return(
            <>
            <h1>
                Counter: {this.state.count}
            </h1>
            </>
        )
    }
}

//When calling setState to increment the counter, should the parameter be a function or an object? Why?
//Può essere sia un oggetto che una funzione, dipende dalle situazioni, utilizzare una funzione è più utile nel momento in cui ci sono più chiamate setState dipendenti l'una dall'altra
//Questo perché gli state non sono sempre sincroni e quando il valore di uno state dipende dal valore di un altro, per far si che avvengano in maniera sincrona è bene usare le callback al posto degli oggetti