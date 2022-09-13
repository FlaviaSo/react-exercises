import React from 'react'


export function Sum({numbers}){
    return(
        <div>
            <h1>Somma: {numbers.reduce((x,y) => x+y)}</h1>
        </div>
    )
}