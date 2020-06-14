import React, { Component } from 'react';
import api from '../api';

import styled from 'styled-components';
import { InputFieldForm, RecipeCategory } from '../components/InsertRecipe';

const Wrapper = styled.div.attrs({
    className: 'container'
})`
    padding-top: 1em;
`

const Form = styled.form.attrs({
    className: 'form m-auto border p-4 needs-validation',
})`max-width: 700px;`

const Row = styled.div.attrs({
    className: 'form-group m-4'
})``

const Title = styled.h1.attrs({
    className: 'text-center'
})`margin: 0 auto 1em;`

const Label = styled.label.attrs({
    className: 'font-weight-bold text-left mb-0'
})`
    display: block;
    padding-left: 2px;
    padding-bottom: 2px;
    font-size: .8em;
`

const InputText = styled.input.attrs({
    className: 'col'
})``

const TextArea = styled.textarea.attrs({
    className: 'col'
})``

const ValidFeedback = styled.div.attrs({
    className: 'valid-feedback'
})``

const InvalidFeedback = styled.div.attrs({
    className: 'invalid-feedback'
})``

const Button = styled.button.attrs({
    className: 'btn btn-warning col my-2'
})``

const CancelButton = styled.a.attrs({
    className: 'btn col my-2'
})``

const RecipesUpdate = () => {
    const [state, setState] = React.useState({
        id: this.props.match.params.id,
        name: '',
        category: '',
        description: '',
        ingredient_quantity: '',
        ingredients: [],
        unit_of_measurement: '',
        instructions: '',
        preparation_time: '',
        cooking_time: '',
        total_time: 0,
        serves: '',
        notes: '',
        author: '',
        url: '',
        rating: undefined,
        });

    }

    handleChangeName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeDescription = async event => {
        const description = event.target.value
        this.setState({ description })
    }

    handleChangeIngredientQuantity = async event => {
        const ingredient_quantity = event.target.value
        this.setState({ ingredient_quantity })
    }

    handleChangeIngredients = async event => {
        const Ingredients = event.target.value
        this.setState({ Ingredients })
    }

    handleChangeInstructions = async event => {
        const instructions = event.target.value
        this.setState({ instructions })
    }

    handleChangePreparationTime = async event => {
        const preparation_time = event.target.value
        this.setState({ preparation_time })
    }

    handleChangeCookingTime = async event => {
        const cooking_time = event.target.value
        this.setState({ cooking_time })
    }

    handleChangeTotalTime = async event => {
        const total_time = event.target.value
        this.setState({ total_time })
    }

    handleChangeServes = async event => {
        const serves = event.target.value
        this.setState({ serves })
    }

    handleChangeNotes = async event => {
        const notes = event.target.value
        this.setState({ notes })
    }

    handleChangeAuthor = async event => {
        const author = event.target.value
        this.setState({ author })
    }

    handleChangeURL = async event => {
        const url = event.target.value
        this.setState({ url })
    }

    handleChangeRating = async event => {
        const rating = event.target.value
        this.setState({ rating })
    }

    handleChangeImages = async event => {
        const images = event.target.value
        this.setState({ images })
    }

    handleUpdateRecipe = async () => {
        const { id, name, description, ingredient_quantity, ingredients, instructions, preparation_time, cooking_time, total_time, serves, notes, author, url, rating, images } = this.state
        const payload = { name, description, ingredient_quantity, ingredients, instructions, preparation_time, cooking_time, total_time, serves, notes, author, url, rating, images }

        await api.updateRecipeById(id, payload).then(res => {
            window.alert(`Recipe successfully updated!`)
            this.setState({
                name: '',
                description: '',
                ingredient_quantity: '',
                ingredients: [],
                instructions: '',
                preparation_time: '',
                cooking_time: '',
                total_time: '',
                serves: '',
                notes: '',
                author: '',
                url: '',
                rating: '',
                images: [],
            })
        })
    }

    componentDidUpdate = async () => {
        const { id } = this.state
        const recipe = await api.getRecipeById(id)

        this.setState({
            name: recipe.data.data.name,
            description: recipe.data.data.description,
            ingredient_quantity: recipe.data.data.ingredient_quantity,
            ingredients: [],
            instructions: recipe.data.data.instructions,
            preparation_time: recipe.data.data.preparation_time,
            cooking_time: recipe.data.data.cooking_time,
            total_time: recipe.data.data.total_time,
            serves: recipe.data.data.serves,
            notes: recipe.data.data.notes,
            author: recipe.data.data.author,
            url: recipe.data.data.url,
            rating: recipe.data.data.rating,
            images: recipe.data.data.images,
        })
    }

    render() {
        const { name, description, ingredient_quantity, ingredients, instructions, preparation_time, cooking_time, total_time, serves, notes, author, url, rating, images } = this.state
        return (
            <Wrapper>
                <Title>Update Recipe</Title>

                <Label>Name: </Label>
                <InputText 
                    type="text"
                    value={ name }
                    onChange={this.handleChangeName}
                />

                <Label>Description: </Label>
                <InputText 
                    type="text"
                    value={ description }
                    onChange={this.handleChangeDescription}
                />

                <Label>Ingredient Quantity: </Label>
                <InputText 
                    type="text"
                    value={ ingredient_quantity }
                    onChange={this.handleChangeIngredientQuantity}
                />

                <Label>Ingredients: </Label>
                <InputText 
                    type="text"
                    value={ ingredients }
                    onChange={this.handleChangeIngredients}
                />

                <Label>Instructions: </Label>
                <InputText 
                    type="text"
                    value={ instructions }
                    onChange={this.handleChangeInstructions}
                />

                <Label>Preparation Time: </Label>
                <InputText 
                    type="text"
                    value={ preparation_time }
                    onChange={this.handleChangePreparationTime}
                />

                <Label>Cooking Time: </Label>
                <InputText 
                    type="text"
                    value={ cooking_time }
                    onChange={this.handleChangeCookingTime}
                />

                <Label>Total Time: </Label>
                <InputText 
                    type="text"
                    value={ total_time }
                    onChange={this.handleChangeTotalTime}
                />

                <Label>Serves: </Label>
                <InputText 
                    type="text"
                    value={ serves }
                    onChange={this.handleChangeServes}
                />

                <Label>Notes: </Label>
                <InputText 
                    type="text"
                    value={ notes }
                    onChange={this.handleChangeNotes}
                />

                <Label>Author: </Label>
                <InputText 
                    type="text"
                    value={ author }
                    onChange={this.handleChangeAuthor}
                />

                <Label>URL: </Label>
                <InputText 
                    type="text"
                    value={ url }
                    onChange={this.handleChangeURL}
                />

                <Label>Rating: </Label>
                <InputText 
                    type="number"
                    step="1"
                    lang="en-US"
                    min="0"
                    max="5"
                    pattern="[0-5]+([,\.][0-5]+)?"
                    value={ rating }
                    onChange={this.handleChangeRating}
                />

                <Label>Images: </Label>
                <InputText 
                    type="text"
                    value={ images }
                    onChange={this.handleChangeImages}
                />

                <Button onClick={this.handleUpdateRecipe}>Update Recipe</Button>
                <CancelButton href={'/recipes/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default RecipesUpdate;