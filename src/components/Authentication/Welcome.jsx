import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h4.attrs({
    className: 'text-center'
})``

const Text = styled.p``

const Container = styled.div.attrs({
    className: 'container my-5 text-center'
})``

const Button = styled.button.attrs({
    className: 'btn mx-3'
})``

const Welcome = (props) => {
    let content;
    
    if (props.user) {
    content = <Title>Welcome { props.user.firstName }</Title>
    } else {
        content = (
            <Container>
                <Link to='/signup'>
                    <Button className='btn-warning'>SIGN UP</Button>
                </Link>
                <Link to='/login'>
                    <Button className='btn-success'>LOG IN</Button>
                </Link>
            </Container>
        )
    }

    return (
        <Container>
            <Title>Welcome to the Recipe App</Title>
            <Text>You are probably thinking <i>"there are hundreds of recipe apps / websites out there...why do I need another one"</i>? Maybe you don't. I really enjoy cooking and baking & needed a place to store all my recipes in one place without dealing without being overwhelmed by ads.</Text>
            {content}
        </Container>
    )
}

export default Welcome;