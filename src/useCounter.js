import { useState } from 'react'

export function useCounter(initialValue) {
    const [data, setData] = useState(initialValue)

    function handleIncrement() {
        setData(data => data + 1)
    }

    function handleDecrement() {
        setData(data => data - 1)
    }

    function handleReset() {
        setData(data => initialValue)
    }

    return {
        data, handleIncrement, handleDecrement, handleReset
    }
}