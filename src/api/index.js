import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
});

// Recipe Routes
export const insertRecipe = payload => api.post(`/recipes`, payload);
export const getRecipes = () => api.get(`/recipes`);
export const updateRecipeById = (id, payload) => api.patch(`/recipes/${id}`, payload);
export const deleteRecipeById = id => api.delete(`/recipes/${id}`);
export const getRecipeById = id => api.get(`/recipes/${id}`);

// Ingredient Routes
export const insertIngredient = payload => api.post(`/ingredients`, payload);
export const getAllIngredients = () => api.get(`/ingredients`);
export const getIngredientById = id => api.get(`/ingredients/${id}`);

const apis = {
    insertRecipe,
    getRecipes,
    getRecipeById,
    updateRecipeById,
    deleteRecipeById,
    insertIngredient,
    getAllIngredients,
}

export default apis;