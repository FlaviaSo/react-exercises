import React from 'react'
import { useCounter } from "./useCounter"

export function UseCounterHook() {
    const {data, increment, decrement, reset} = useCounter(0)

    return (
        <>
            <h1>Conteggio: {data}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}