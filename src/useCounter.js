import { useCallback, useState } from 'react'

export function useCounter(initialValue) {
    const [data, setData] = useState(initialValue)

    const increment = useCallback(() => {
        setData(data => data + 1)
    }, [])

    const decrement = useCallback(() => {
        setData(data => data - 1)
    }, [])

    const reset = useCallback(() => {
        setData(initialValue)
    }, [initialValue])

    return {
        data, increment, decrement, reset
    }
}