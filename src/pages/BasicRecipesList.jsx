import React, { useState, useEffect } from 'react';
import api from '../api'
import { Link } from 'react-router-dom';
import { RecipeCard } from '../components/Recipe'

import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: 'container m-auto'
})`
    padding-top: 1em;
    max-width: 700px;
`

function BasicRecipeList() {
    const [recipes, setRecipes] = useState([])

    useEffect(function() {
        async function getRecipes() {
            try {
                const response = await api.getRecipes();
                setRecipes(response.data.data);
            } catch(error) {
                console.log('error', error);
            }
        }        
        getRecipes();
    }, []);

    return (
        <Wrapper>
            <h2>
                Recipes
                <Link to="/recipes/create" className="btn btn-primary float-right">Create Recipe</Link> 
            </h2>
            <RecipeCard></RecipeCard>
            <hr/>
            {recipes.map((recipes) => {
                return(
                    <Link to={`/recipes/${recipes._id}`}>
                        <div key={recipes._id}>
                            <h4><Link to={`/recipes/${recipes._id}`}>{recipes.title}</Link></h4>
                            <small>_id: {recipes._id}</small>
                            
                        </div>
                        <div key={recipes.name}>
                            <small>{recipes.name}</small>
                        </div>
                        <hr/>
                    </Link>
                )     
            })}
        </Wrapper>
    )
}

export default BasicRecipeList;