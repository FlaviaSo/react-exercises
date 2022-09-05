import React from 'react'
import {Message} from './Message'


export class Hello extends React.Component {
    render() {
        /*component-06
    
        return (
            <>
                <h1>Hello, World!</h1>     
                <p>What a beautiful day!</p>
            </>
        )
        */
         return (
            <>
                <h1>Hello, World!</h1>
                <Message />
            </>
        )
    }
}