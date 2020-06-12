import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
});

// Recipe Routes
export const insertRecipe = payload => api.post(`/recipes`, payload);
export const getAllRecipes = () => api.get(`/recipes`);
export const updateRecipeById = (id, payload) => api.put(`/recipes/${id}`, payload);
export const deleteRecipeById = id => api.delete(`/recipes/${id}`);
export const getRecipeById = id => api.get(`/recipes/${id}`);

// Ingredient Routes
export const insertIngredient = payload => api.post(`/ingredient`, payload);
export const getAllIngredients = () => api.get(`/ingredients`);
export const getIngredientById = id => api.get(`/ingredient/${id}`);

const apis = {
    insertRecipe,
    getAllRecipes,
    updateRecipeById,
    deleteRecipeById,
    insertIngredient,
    getAllIngredients,
    getRecipeById,
}

export default apis;