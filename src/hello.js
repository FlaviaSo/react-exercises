import React from 'react'

export class Hello extends React.Component {
    render() {
        //component-06
        /*
        return (
            <>
                <h1>Hello, World!</h1>     
                <p>What a beautiful day!</p>
            </>
        )
        */
        
        //component-07
         return (
            <>
                <h1>Hello, World!</h1>
                <Message />
            </>
        )
    }
}

export const Message = () => {
    return(
        <p>What a beautiful day!</p>
    )
}