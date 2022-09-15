import { useState } from 'react'

export function useForm(boh) {
    const [data, setData] = useState(boh)

    function handleStateChange(e){
        setData(data =>({
            ...data,
            [e.target.name]: e.target.value
        }))
    }

    return{
        formData: data,
        handleStateChange
    }
}