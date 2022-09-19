import React from 'react'

export function Welcome({name = 'Flavia'}){
    return(
        <div className="welcome">
            <p>Welcome, {name}!</p>
        </div>
    )
}
