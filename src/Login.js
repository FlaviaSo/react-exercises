import React from 'react'

export class Login extends React.Component{
    state = {
        username: "",
        password: "",
        remember: false,
    }

    handleInput = e => {
        const name = e.target.name
        this.setState({
            [name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
        })
    }

    render(){
        return(
            <>
                <label>Username</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleInput}/>
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleInput}/>
                <label>Remember me?</label>
                <input type="checkbox" name="remember" value={this.state.remember} onChange={this.handleInput}/>
            </>
        )
    }
}