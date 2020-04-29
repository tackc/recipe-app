import React, { Component } from 'react';
import api from '../api';

import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: 'container'
})``

const Row = styled.div.attrs({
    className: 'row'
})``

const Title = styled.h1`margin: 0 auto 1em;`

const Label = styled.label.attrs({
    className: 'col-2'
})`margin: .5em; text-align: left`

const InputText = styled.input.attrs({
    className: 'col'
})`margin: .5em`

const Button = styled.button``

const CancelButton = styled.a`margin: 1em 1em 1em .4em`

class RecipesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
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
            images: '',
        }
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

    handleAddRecipe = async () => {
        const { name, description, ingredient_quantity, ingredients, instructions, preparation_time, cooking_time, total_time, serves, notes, author, url, rating, images } = this.state
        const payload = { name, description, ingredient_quantity, ingredients, instructions, preparation_time, cooking_time, total_time, serves, notes, author, url, rating, images }

        await api.createRecipe(payload).then(res => {
            window.alert(`Recipe successfully added!`)
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
                images: '',
            })
        })
    }

    render() {
        const { name, description, ingredient_quantity, ingredients, instructions, preparation_time, cooking_time, total_time, serves, notes, author, url, rating, images } = this.state
        return (
            <Wrapper>
                <Title>Create Recipe</Title>

                <Row>
                    <Label>Name: </Label>
                    <InputText 
                        type="text"
                        value={ name }
                        onChange={this.handleChangeName}
                    />
                </Row>

                <Row>
                    <Label>Description: </Label>
                    <InputText 
                        type="text"
                        value={ description }
                        onChange={this.handleChangeDescription}
                    />
                </Row>

                <Row>
                    <Label>Ingredient Quantity: </Label>
                    <InputText 
                        type="text"
                        value={ ingredient_quantity }
                        onChange={this.handleChangeIngredientQuantity}
                    />
                </Row>

                <Row>
                    <Label>Ingredients: </Label>
                    <InputText 
                        type="text"
                        value={ ingredients }
                        onChange={this.handleChangeIngredients}
                    />
                </Row>

                <Row>
                    <Label>Instructions: </Label>
                    <InputText 
                        type="text"
                        value={ instructions }
                        onChange={this.handleChangeInstructions}
                    />
                </Row>

                <Row>
                    <Label>Preparation Time: </Label>
                    <InputText 
                        type="text"
                        value={ preparation_time }
                        onChange={this.handleChangePreparationTime}
                    />
                </Row>
                
                <Row>
                    <Label>Cooking Time: </Label>
                    <InputText 
                        type="text"
                        value={ cooking_time }
                        onChange={this.handleChangeCookingTime}
                    />
                </Row>

                <Row>
                    <Label>Total Time: </Label>
                    <InputText 
                        type="text"
                        value={ total_time }
                        onChange={this.handleChangeTotalTime}
                    />
                </Row>

                <Row>
                    <Label>Serves: </Label>
                    <InputText 
                        type="text"
                        value={ serves }
                        onChange={this.handleChangeServes}
                    />
                </Row>

                <Row>
                    <Label>Notes: </Label>
                    <InputText 
                        type="text"
                        value={ notes }
                        onChange={this.handleChangeNotes}
                    />
                </Row>

                <Row>
                    <Label>Author: </Label>
                    <InputText 
                        type="text"
                        value={ author }
                        onChange={this.handleChangeAuthor}
                    />
                </Row>

                <Row>
                    <Label>URL: </Label>
                    <InputText 
                        type="text"
                        value={ url }
                        onChange={this.handleChangeURL}
                    />
                </Row>

                <Row>
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
                </Row>

                <Row>
                    <Label>Images: </Label>
                    <InputText 
                        type="text"
                        value={ images }
                        onChange={this.handleChangeImages}
                    />
                </Row>

                <Row>
                    <Button onClick={this.handleAddRecipe}>Add Recipe</Button>
                    <CancelButton href={'/recipes/list'}>Cancel</CancelButton>
                </Row>
            </Wrapper>
        )
    }
}

export default RecipesInsert;