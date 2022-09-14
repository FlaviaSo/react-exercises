import React, { useEffect, useState } from 'react';
import { CounterDisplay } from './CounterDisplay'

export function Counter() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((x) => x + 1)
        }, 1000)
        
        return () => {
            clearInterval(interval)
        }
    })

    return (
        <>
            <h1>
                <CounterDisplay variabileState={counter} />
            </h1>
        </>
    )
}

//When calling setState to increment the counter, should the parameter be a function or an object? Why?
//Può essere sia un oggetto che una funzione, dipende dalle situazioni, utilizzare una funzione è più utile nel momento in cui ci sono più chiamate setState dipendenti l'una dall'altra
//Questo perché gli state non sono sempre sincroni e quando il valore di uno state dipende dal valore di un altro, per far si che avvengano in maniera sincrona è bene usare le callback al posto degli oggetti
