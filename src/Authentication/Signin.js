import React, { Component } from 'react';
// import axios from 'axios';
import './Signin.css';
import SignInBackgroundImage from '../components/images/_DSC2626.jpg';

class Signin extends Component {
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
            <div className="Account">
                <img className="SignInBackgroundImage" src={SignInBackgroundImage} alt="Two glasses of Thai Iced Tea"></img>
                <div id="appleid-signin" className="signin-button" data-color="black" data-border="true" data-type="sign in"></div>
            </div>
        )
    }
}

export default Signin;