import React, { Component } from 'react';
import axios from 'axios';
import ErrorPanel from './ErrorPanel';
import styled from 'styled-components';


const LoginWrapper = styled.div.attrs({
    className: 'login-wrapper'
})`
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
    background-color: rgba(255, 255, 255, 0.3);
    align-content: center;
    margin: auto;
    padding: 1em;
    text-align: center;
`

const Header = styled.h3.attrs({
    className: 'mb-5',
})``

const Form = styled.form.attrs({
    autocomplete: 'on',
})`
    width: 100%;
    margin: auto;
`

const Row = styled.div.attrs({
    className: 'form-group'
})``

const Label = styled.label.attrs({
    className: 'col-2'
})``

const Input = styled.input.attrs({
    className: 'col-5'
})``

const Submit = styled.input.attrs({
    className: 'col-2 my-5',
    type: 'submit',
    value: 'Log In'
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
                <Header>Log in</Header>
                {errorPanel}

                <Form>
                    <Row>
                        <Label htmlFor='s-email' >Email:</Label>
                        <Input type='email' name='s-email' autofill='email' placeholder="name@example.com" ></Input>
                    </Row>

                    <Row>
                        <Label htmlFor='s-password' >Password:</Label>
                        <Input type='password' name='s-password' autocomplete='current-password' ></Input>
                    </Row>

                    <Row>
                        <Submit />
                    </Row>
                </Form>
            </LoginWrapper>
        )
    }
}

export default Login;