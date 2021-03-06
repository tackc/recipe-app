import React from 'react';

import styled from 'styled-components';
import Button from '@bit/smei.ui-lib.button';

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

const Ingredients = styled.ul`
    color: #FFF;
`

const Ingredient = styled.li

const RecipeCard = (props) => {
    console.log(props)
    return(
        <Wrapper>
            <Header><Button /></Header>
            <Images></Images>
            <Title>{props.recipe.title}</Title>
            <Button color="secondary" outline>Edit Recipe</Button>
            <Ingredients>
                <Ingredient>{props.recipe.ingredient}</Ingredient>
            </Ingredients>
        </Wrapper>
    )
}

export default RecipeCard;
