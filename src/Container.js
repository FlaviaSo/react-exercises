import React from "react";

export class Container extends React.Component{
    render(){
        return(
            <div className="container border-solid border-2 border-red-900 bg-white">
                <div className="container-body">{this.props.children}</div>
            </div>
        )
    }
}