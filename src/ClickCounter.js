import React from 'react'
import {useState} from 'react'
import {CounterButton} from './CounterButton'

export function ClickCounter({initialValue = 5}) {
    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement() {
       setCounter((c) => c + 1)
    }


        return(
            <>
            <h1>Counter: {counter}</h1>
            <CounterButton counterIncrement={handleCounterIncrement} />
            </>  
        )
    }
