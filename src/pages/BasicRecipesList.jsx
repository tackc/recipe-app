import React, { useState, useEffect } from 'react';
import api from '../api'
import { Link } from 'react-router-dom';
import { RecipeCard } from '../components/Recipe';
import { Search } from '../components/Search';

import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: 'container m-auto'
})`
    padding-top: 1em;
    max-width: 700px;
`

const Recipes = styled.div.attrs({
    className: 'd-flex flex-wrap justify-content-center'
})``

const Row = styled.div.attrs({
    className: 'row justify-content-between'
})``

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
            <Row>
                <h2 className="">Recipes</h2>
                <Search className="" />
                <Link to="/recipes/create" className="btn btn-primary float-right">Create Recipe</Link>
            </Row>
            <hr/>
            <Recipes>
                {recipes.map((recipe) => {
                    return(
                        <Link key={recipe._id} to={`/recipes/${recipe._id}`}>
                            <RecipeCard name={recipe.name} description={recipe.description} id={recipe._id}></RecipeCard>
                        </Link>
                    )}
                )}
            </Recipes>
        </Wrapper>
    )
}

export default BasicRecipeList;