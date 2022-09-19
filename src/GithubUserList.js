import React, { useState } from "react"
import { GithubUser } from "./GithubUser"

export function GithubUserList() {
    const [usersList, setUsersList] = useState([])
    const [username, setUsername] = useState('')

    function handleInputChange(e) {
        setUsername(() => { return e.target.value })
    }

    function addUser() {
        setUsersList((data) => {
            return [...data, username]
        })
        setUsername(() => {
            return ''
        })
    }


    return (
        <div>
            <input name={'username'} onChange={handleInputChange} value={username} />
            <button onClick={addUser}>Add user</button>
            <ul>
            {usersList.map((item, index) => {
                return (<li key={index}><GithubUser username={item}/></li>)
            })}
            </ul>
        </div>
    )
}