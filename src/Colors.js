import React from "react";

export class Colors extends React.Component{
    render(){
        

        return(
            <div>
                <ul>
                    {this.props.items.map((items) => (
                    <li>{items}</li>
                    ))}
                </ul>
            </div>
        )
    }
}