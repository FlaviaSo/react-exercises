import React from "react";
import {Welcome} from "./Welcome"

export class InteractiveWelcome extends React.Component {
    state = { name: ""}

    handleNameInput = (e) => {
        const value = e.target.value;
        this.setState(
            { 
                name: value
            }
            )
        }

    render() {
        return (
            <>
            <input value={this.state.name} onChange={this.handleNameInput}></input>
            <Welcome name={this.state.name} />
            </>
        );

    }
}