import React, { Component } from 'react';

import styled from 'styled-components';

// import axios from 'axios';
import './Signin.css';
import SignInBackgroundImage from '../components/images/_DSC2626.jpg';

const Wrapper = styled.div.attrs({
    className: 'signin-wrapper'
})`
    width: 25vw;
    height: 80vh;
`

const BackgroundImage = styled.img.attrs({
    className: 'signin-background-image'
})`
    background: url({ SignInBackgroundImage });
`

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
            // <div className="Account">
            //     <img className="SignInBackgroundImage" src={SignInBackgroundImage} alt="Two glasses of Thai Iced Tea"></img>
            //     <div id="appleid-signin" className="signin-button" data-color="black" data-border="true" data-type="sign in"></div>
            // </div>
            <Wrapper>
                <BackgroundImage />
            </Wrapper>
        )
    }
}

export default Signin;