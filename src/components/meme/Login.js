import React from "react"

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: false,
            counter: 0
        }
    }
    handleButtonClick = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
    }
    handleLogin = () => {
        this.setState(prevState => ({
            login: !prevState.login
        }))
    }
    render() {
        let buttonText = this.state.login ? "Logout" : "Login"
        return (
            <>
            <h5>You are logged {this.state.login ? "in" : "out"}</h5>
            <button onClick={this.handleLogin}>{buttonText}</button>
        
            <h1>{this.state.counter}</h1>
            <button onClick={this.handleButtonClick}>Increase my happiness!</button>
            </>
        )
    }
}

export default Login