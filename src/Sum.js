import React from 'react'


export function Sum({numbers=[1,2,3,4,5]}){
    return(
        <div>
            <h1>Somma: {numbers.reduce((x,y) => x+y)}</h1>
        </div>
    )
}