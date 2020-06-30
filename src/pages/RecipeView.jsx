import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../api';
import axios from 'axios';

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

const RecipeView = (...props) => {
    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        async function getRecipeById() {
            try {
                // const response = await api.getRecipeById();
                const response = await axios.get(`/api/recipes/${props.match.params._id}`);
                setRecipe(response.data)
                console.log(response.data.data)
            } catch(error) {
                console.log('error', error);
            }
        }
        getRecipeById();
    }, [props]);

    return(
        <Wrapper>
            <Title>{recipe.name}</Title>
            <Title>{recipe.title}</Title>
        </Wrapper>
    )
}

export default RecipeView;