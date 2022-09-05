import React from 'react'

export class CounterDisplay extends React.Component{
    render(){
        return(
            <h1>
                count: {this.props.variabileState}
            </h1>
        )
    }
}