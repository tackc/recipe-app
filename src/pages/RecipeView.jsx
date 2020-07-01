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

function RecipeView(props) {
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        async function getRecipe() {
            try {
                const response = await apis.getRecipeById(props.match.params.id);
                setRecipe(response.data.data)
                console.log(response.data.data)
            } catch(error) {
                console.log('error', error);
            }
        }
        getRecipe();
    }, [props]);

    return(
        <Wrapper>
            <Title>{recipe.name}</Title>
        </Wrapper>
    )
}

export default RecipeView;