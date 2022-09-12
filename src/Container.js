import React from "react";

export class Container extends React.Component{
    render(){
        return(
            <div className="container border-solid border-2 border-red-900 bg-white">
                <h1 className="container-title">{this.props.title}</h1>
                <div className="container-body">{this.props.children}</div>
            </div>
        )
    }
}