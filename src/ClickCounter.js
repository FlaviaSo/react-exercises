import React from 'react'
import {CounterButton} from './CounterButton'

export class ClickCounter extends React.Component {
    state = {
        count: 0,
    };

    handleCounterIncrement = () => {
        this.setState((state) => ({
                count: state.count + 1,
        }));
    }

    render() {
        return(
            <>
            <h1>Counter: {this.state.count}</h1>
            <CounterButton counterIncrement={this.handleCounterIncrement} />
            </>  
        )
    }
}