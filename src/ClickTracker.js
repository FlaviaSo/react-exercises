import React from "react";

export class ClickTracker extends React.Component{
    state = {
        button: "",
    };

    handleClick = (e) => {
        this.setState((state) => ({
            button: (state.button = e.target.innerText),
        }))
    }
    render(){
        return(
        <>
        <h2>Last clicked: {this.state.button}</h2>
        <button onClick={this.handleClick}>N.1</button>
        <button onClick={this.handleClick}>N.2</button>
        <button onClick={this.handleClick}>N.3</button>
        </>
        )
    }
}