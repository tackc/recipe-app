import React, { Component } from 'react';
import axios from 'axios';
import ErrorPanel from './ErrorPanel';
// import { render } from '@testing-library/react';
import styled from 'styled-components';

const SignupDiv = styled.div` 
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
    background-color: rgba(255, 255, 255, 0.3);
    align-content: center;
    margin: 0 auto;
    padding: 1em;
    text-align: center;
`

const Header = styled.h3.attrs({
    className: 'mb-5'
})``

const Form = styled.form.attrs({
    className: 'm-auto border',
    autocomplete: 'on',
})`
    max-width: 350px;
`

const Row = styled.div.attrs({
    className: 'form-group m-4'
})``

const Label = styled.label.attrs({
    className: 'font-weight-bold text-left mb-0'
})`
    display: block;
    padding-left: 2px;
    padding-bottom: 2px;
    font-size: .8em;
`

const Input = styled.input.attrs({
    className: 'col'
})``

const Submit = styled.input.attrs({
    className: 'col btn btn-success',
    type: 'submit',
    value: 'Sign Up!'
})``

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            error: null,
        }
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleFirstNameChange(e) {
        this.setState({
            firstName: e.target.value
        })
    }

    handleLastNameChange(e) {
        this.setState({
            lastName: e.target.value
        })
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
        
        if (this.state.password.length < 8 || this.state.password > 99) {
            this.setState({
                error: {
                    type: 'auth_error',
                    status: 401,
                    message: 'Your password must be between 8 & 99 characters.'
                },
                password: ''
            })
        } else {
            axios.post('/auth/signup', {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
            }).then( result => {
                if (result.data.type.includes('error')) {
                    this.setState({
                        error: result.data,
                        email: '',
                        password: '',
                    })
                } else {
                    localStorage.setItem('mernToken', result.data.token)
                    this.props.liftToken(result.data)
                }
            } ).catch( err => {
                this.setState({
                    error: {
                        type: 'rate-error',
                        status: 429,
                        message: 'Maximum attempts exceeded. Please try again later.'
                    }
                })
            })
        }
    }
    render() {
        const errorPanel = (this.state.error) ? <ErrorPanel error={this.state.error} /> : ''
    
        return (
            <SignupDiv>
                {errorPanel}
    
                <Form onSubmit={this.handleSubmit}>
                    <Header>Create Account:</Header>
                    <Row>
                        <Label htmlFor='s-firstname' >First Name:</Label>
                        <Input name='s-firstname' ></Input>
                    </Row>
    
                    <Row>
                        <Label htmlFor='s-lastname' >Last Name:</Label>
                        <Input name='s-lastname' autofill='last' ></Input>
                    </Row>
    
                    <Row>
                        <Label htmlFor='s-email' >Email:</Label>
                        <Input type='email' name='s-email' autofill='email' placeholder="name@example.com" ></Input>
                    </Row>
    
                    <Row>
                        <Label htmlFor='s-password' >Password:</Label>
                        <Input type='password' name='s-password' autocomplete='new-password' ></Input>
                    </Row>

                    <Row>
                        <Submit />
                    </Row>
                </Form>
            </SignupDiv>
        )
    }
}

export default Signup;
