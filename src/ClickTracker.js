import React from "react";

export class ClickTracker extends React.Component{
    state = {
        button: "",
    };

    handleClick = (e) => {
        this.setState((state) => ({
            button: (state.button = e.target.alt),
        }))
    }
    render(){
        return(
        <>
        <h2>Last clicked: {this.state.button}</h2>
        <button onClick={this.handleClick}>
            <img width="100px" height="100px" src="https://stickerly.pstatic.net/sticker_pack/V3UsPH6pEtk8qTcLjMqdQ/F4MF00/33/0f261fb1-c49f-4e7f-9ae0-9a606cca3cb9.png" alt="pepeok"></img>
        </button>
        <button onClick={this.handleClick}>
            <img width="100px" height="100px" src="https://stickerly.pstatic.net/sticker_pack/V3UsPH6pEtk8qTcLjMqdQ/F4MF00/33/fac688c7-70ef-4ec7-b98d-9417687bde85.png" alt="pepeshy"></img>
        </button>
        <button onClick={this.handleClick}>
            <img width="100px" height="100px" src="https://stickerly.pstatic.net/sticker_pack/V3UsPH6pEtk8qTcLjMqdQ/F4MF00/33/45921b5b-b1d6-4089-923f-44d922516337.png" alt="pepebrave"></img>
        </button>
        </>
        )
    }
}