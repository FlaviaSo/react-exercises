import {useState, useEffect} from 'react'

export function useGithubUser(username){
    const [data, setData] = useState(username)

    useEffect(() => {
        (async() => {
            const github = await fetch(`https://api.github.com/users/${username}`)
            const json = await github.json()
            setData(json)
        })()
    }, [username])

    return{
        data: data
    }
}