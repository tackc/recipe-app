import React, { Component } from 'react';
import axios from 'axios';
import ErrorPanel from './ErrorPanel';
import styled from 'styled-components';


const LoginWrapper = styled.div.attrs({
    className: 'login-wrapper container-fluid'
})`
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
    value: 'Log In'
})``

const Divider = styled.div.attrs({
    className: 'mx-auto my-3'
})`
&{
    width: 350px;
    text-align: center;
    position: relative;
    top: 2px;
    padding-top: 1px;
    margin-bottom: 14px;
    line-height: 0;
}
&:after{
    content: "";
    width: 100%;
    background-color: transparent;
    display: block;
    height: 1px;
    border-top: 1px solid #e7e7e7;
    position: absolute;
    top: 50%;
    margin-top: -1px;
    z-index: 1;
}
`
const H5 = styled.h5`
    line-height: 1;
    font-size: 12px;
    color: #767676;
    font-weight: 400;
    z-index: 2;
    position: relative;
    display: inline-block;
    background-color: #fff;
    padding: 0 8px 0 7px;
`

const CreateAccountButton = styled.a.attrs({
    className: 'btn btn-warning col-2',
    href: '/signup'
})``

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: null
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
                        <Input type='email' name='s-email' autofill='email' ></Input>
                    </Row>

                    <Row>
                        <Label htmlFor='s-password' >Password:</Label>
                        <Input type='password' name='s-password' autocomplete='current-password' ></Input>
                    </Row>

                    <Row>
                        <Submit />
                    </Row>
                </Form>

                <Divider>
                    <H5>Don't have an account yet?</H5>
                </Divider>

                <CreateAccountButton>Create Your Account</CreateAccountButton>
            </LoginWrapper>
        )
    }
}

export default Login;