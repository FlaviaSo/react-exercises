import React from "react";

export class UncontrolledLogin extends React.Component{
    
    handleFormSubmit = e =>{
        e.preventDefault()

        const username = e.target.elements.username.value
        const password = e.target.elements.password.value
        const remember = e.target.elements.remember.checked

        console.log({
            username,
            password,
            remember
        })
    }

    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <label>Username</label>
                <input name="username" /><br></br>
                <label>Password</label>
                <input name="password" type="password" /><br></br>
                <label>Remember</label>
                <input name="remember" type="checkbox" /><br></br>
                <button type="submit">Login</button>
                <button type="reset">Reset</button>
            </form>
        )
    }
}