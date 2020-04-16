import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh
`

const Header = styled.header`
    width: 100%;
    background-color: 'paleblue'
`

const Images = styled.image`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const Title = styled.h1.attrs({
    className: 'recipe-title light-mode'
})`
    color: #222;
`

const RecipeCard = (props) => {
    console.log(props)
    return(
        <Wrapper>
            <Header></Header>
            <Images></Images>
            <Title>{props.recipe.title}</Title>
        </Wrapper>
    )
}

export default RecipeCard;
