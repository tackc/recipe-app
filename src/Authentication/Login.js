import React, { Component } from 'react';
import axios from 'axios';
import ErrorPanel from './ErrorPanel';
import styled from 'styled-components';


const LoginWrapper = styled.div.attrs({
    className: 'login-wrapper'
})`
    width: 25vw;
    height: 80vh;
`
const Header = styled.h3.attrs({
    className: 'mb-5',
})``


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: null
        }
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        axios.post('/auth/login', {
            email: this.state.email,
            password: this.state.password
        }).then( result => {
            if (result.data.type.includes('error')) {
                this.setState({
                    error: result.data
                })
            } else {
                localStorage.setItem('mernToken', result.data.token)
                this.props.liftToken(result.data)
                this.setState({
                    errors: null
                })
            }
        }).catch ( err => {
            this.setState({
                error: {
                    type: 'rate_error',
                    status: 429,
                    message: "maximum login attempts exceeded. Please try again later."
                },
                email: '',
                password: ''
            })
        })
    }
    
    render() {
        const errorPanel = (this.state.error) ? <ErrorPanel error={this.state.error} /> : ''

        return (
            // <div className="Account">
            //     <img className="SignInBackgroundImage" src={SignInBackgroundImage} alt="Two glasses of Thai Iced Tea"></img>
            //     <div id="appleid-signin" className="signin-button" data-color="black" data-border="true" data-type="sign in"></div>
            // </div>
            <LoginWrapper>
                <Header />
                {errorPanel}


            </LoginWrapper>
        )
    }
}

export default Login;