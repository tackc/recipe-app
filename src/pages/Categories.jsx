import React from 'react';

import styled from 'styled-components';

const Title = styled.h1`
    margin: 0 auto;
`

const Wrapper = styled.div.attrs({
    className: 'category-wrapper'
})`
    margin: 0 auto;
    background-color: #555;
    width: 30vw;
    height: 25vh;
`
const Button = styled.button.attrs({
    className: 'overlay-button'
})`
    margin: 0 auto;
    width: 100%;
    height: 100%;
`

const Categories = (props) => {
    console.log(props)
    return(
        <Wrapper>
            <Title>{props.categories.title}</Title>
            <Button></Button>
        </Wrapper>
    )
}

export default Categories;
