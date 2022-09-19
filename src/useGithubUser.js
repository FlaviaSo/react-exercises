import { useState, useEffect } from 'react'

export function useGithubUser(username) {
    const [data, setData] = useState(username)
    const [error, setError] = useState()
    const [loading, setLoading] = useState()

    useEffect(() => {
        (async () => {
            setLoading(true)
            const github = await fetch(`https://api.github.com/users/${username}`)
            if (!github.ok) {
                setError(true)
                setLoading(false)
            } else {
                const json = await github.json()
                setData(json)
            }
            setLoading(false)
        })()
    }, [username])

    return {
        data, error, loading
    }
}