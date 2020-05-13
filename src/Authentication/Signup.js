import React, { Component } from 'react';
import axios from 'axios';
import ErrorPanel from './ErrorPanel';
import { render } from '@testing-library/react';

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
}

render() {
    let errorPanel = (this.state.error) ? <ErrorPanel error={this.state.error} /> : ''

    return (
        
    )
}

export default Signup;
