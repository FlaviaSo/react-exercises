import React from 'react'

export class Login extends React.Component{
    state = {
        username: "",
        password: "",
        remember: false,
        login: false,
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

    onLogin = e => {
        this.setState({
            login: true
        })
    }

    handleReset = () =>{
        this.setState({
            username: '',
            password: '',
            remember: false,
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
                <input type="checkbox" name="remember" checked={this.state.remember} onChange={this.handleInput}/><br></br>
                {this.state.username && this.state.password ? <button value={this.state.login} onClick={this.onLogin}>Login</button> : <button disabled>Login</button>}
                <button onClick={this.handleReset}>Reset</button>
            </>
        )
    }
}