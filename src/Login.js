import React from 'react'

export class Login extends React.Component{
    state = {
        username: "",
        password: "",
        remember: false,
    }

    handleInput = e => {
        const name = e.target.name
        const value = e.target.value
        const type = e.target.type
        const checked = e.target.checked

        this.setState({
            [name]: type === "checkbox" ? checked : value,
        })
    }

    render(){
        return(
            <>
                <label>Username</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleInput}/><br></br>
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleInput}/><br></br>
                <label>Remember</label>
                <input type="checkbox" name="remember" checked={this.state.remember} onChange={this.handleInput}/>
            </>
        )
    }
}