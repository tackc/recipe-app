import React, { Component } from 'react';
import axios from 'axios';
import './Signin.css';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            error: null
        }
    }
    
    render() {
        return (
            <div className="Signup">
                <div id="appleid-signin" class="signin-button" data-color="black" data-border="true" data-type="sign in"></div>
            </div>
        )
    }
}

export default Signin;