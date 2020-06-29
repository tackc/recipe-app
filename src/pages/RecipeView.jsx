import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import apis from '../api';

const Wrapper = styled.div.attrs({
    className: 'container'
})`
    max-width: 700px;
    padding-top: 1em;
`

const Title = styled.h1.attrs({
    className: 'recipe-title light-mode'
})`
    color: #222;
`

const RecipeView = (props) => {
    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        async function getRecipeById() {
            try {
                const response = await apis.getRecipeById();
                setRecipe(response.data.data)
            } catch(error) {
                console.log('error', error);
            }
        }
        getRecipeById();
    }, []);

    return(
        <Wrapper>
            <Title>{recipe.title}</Title>
        </Wrapper>
    )
}

export default RecipeView;