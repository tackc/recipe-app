import React, { useState, useEffect } from 'react';
// import  axios  from 'axios';
import api from '../api'
import { Link } from 'react-router-dom';

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
        <div>
            <h2>
                Recipes
                <Link to="/recipes/create" className="btn btn-primary float-right">Create Recipe</Link> 
            </h2>
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
        </div>
    )
}

export default BasicRecipeList;