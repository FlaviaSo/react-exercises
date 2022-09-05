import React from 'react'

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
            <button onClick={this.handleCounterIncrement}>
                Counter: {this.state.count}
            </button>
            </>
        )
    }
}