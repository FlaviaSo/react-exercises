import React, { useEffect, useState, useRef } from 'react'

export function Login() {

    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false,
        login: false,
    })

    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, []);

    function handleInput(e) {
        const { name, type, value, checked } = e.target

        setData((data) => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function onLogin(e) {
        setData((data) => {
            return {
                ...data,
                login: true
            }
        })
    }

    console.log(data)

    return (
        <>
            <label>Username</label>
            <input ref={inputRef} type="text" name="username" value={data.username} onChange={handleInput} /><br></br>
            <label>Password</label>
            <input type="password" name="password" value={data.password} onChange={handleInput} /><br></br>
            <label>Remember</label>
            <input type="checkbox" name="remember" checked={data.remember} onChange={handleInput} /><br></br>
            {data.username && data.password ? <button value={data.login} onClick={onLogin}>Login</button> : <button disabled>Login</button>}
        </>
    )
}
