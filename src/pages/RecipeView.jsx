import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import apis from '../api';

const Wrapper = styled.div.attrs({
    className: 'container'
})`
    max-width: 700px;
    padding-top: 1em;
`

const EditRecipe = styled.a``

const Title = styled.h1.attrs({
    className: 'recipe-title light-mode'
})`
    color: #222;
`

const Category = styled.h4``
const Description = styled.p``
const Instructions = styled.p``
const Notes = styled.p``
const Author = styled.p``
const URL = styled.p``
const Rating = styled.p``

// name: '',
// category: '',
// description: '',
// ingredient_quantity: '',
// ingredients: [],
// unit_of_measurement: '',
// instructions: '',
// preparation_time: '',
// cooking_time: '',
// total_time: 0,
// serves: '',
// notes: '',
// author: '',
// url: '',
// rating: undefined,

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
            <EditRecipe href={`/recipes/${props.match.params.id}/edit`}>Edit</EditRecipe>
            <Title>{recipe.name}</Title>
            <Category>{recipe.category}</Category>
            <Description>{recipe.description}</Description>
            <Instructions>{recipe.instructions}</Instructions>
            <Notes>{recipe.notes}</Notes>
            <Author>{recipe.author}</Author>
            <URL>{recipe.url}</URL>
            <Rating>{recipe.rating}</Rating>
        </Wrapper>
    )
}

export default RecipeView;