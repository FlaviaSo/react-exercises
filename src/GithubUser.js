import React from 'react'
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
    const {data, error, loading} = useGithubUser(username)

    return (
        <div>
            {error ? "ERRORE" : loading ? <h1>LOADING...</h1> : <h1>{data.name}</h1> }
        </div>
    )
}