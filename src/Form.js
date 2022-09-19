import React from 'react'
import {useForm} from './useForm'

export function Formino(){
    const {formData, handleStateChange} = useForm({username:'', password: ''})

    const {username, password} = formData

    return(
        <>
        <input type="text" name="username" value={username} onChange={handleStateChange}/>
        <input type="text" name="password" value={password} onChange={handleStateChange}/>
        </>
    )
}