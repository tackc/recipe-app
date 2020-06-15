import React, { useEffect, useState } from 'react';
import { get, patch } from 'axios';
import api from '../api';
import Rating from '@bit/nexxtway.react-rainbow.rating';

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
    className: 'col',
    type: 'text',
    onChange: '{handleChange}'
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

const CancelButton = styled.button.attrs({
    className: 'btn col my-2'
})``

const RecipesUpdate = (props) => {
    const initialState = {
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
    }
    const [recipe, setRecipe] = useState(initialState)

    useEffect(() => {
        async function getRecipe() {
            try {
                const response = await get(`/recipes/${props.match.params._id}`);
                setRecipe(response.data)
            } catch(error) {
                console.log(error)
            }
        }

        getRecipe();
    }, [props])

    const handleSubmit = (event) => {
        event.preventDefault();
        async function updateRecipe() {
            try {
                await patch(`/recipes/${recipe._id}`, recipe);
                props.history.push(`/recipes/${recipe._id}`);
            } catch(error) {
                console.log(error);
            }
        }
        updateRecipe();
    }

    const handleChange = (event) => {
        setRecipe({...recipe, [event.target.name]: event.target.value})
    }

    // const handleCancel = () => {
    //     props.history.push(`/recipes/${recipe._id}`);
    // }

    // const handleCalculateTotalTime = async (event) => {
    //     const total_time = parseInt(state.preparation_time) + parseInt(state.cooking_time)
    //     setState({ total_time })
    // }

    // const handleUpdateRecipe = async () => {
    //     // const { id, name, description, ingredient_quantity, ingredients, instructions, preparation_time, cooking_time, total_time, serves, notes, author, url, rating, images } = this.state
    //     const payload = { ...state }
    
    //     await api.updateRecipeById(payload).then(res => {
    //         window.alert(`Recipe successfully updated!`)
    //         this.setState({
    //             id: '',
    //             name: '',
    //             category: '',
    //             description: '',
    //             ingredient_quantity: '',
    //             unit: '',
    //             ingredients: [],
    //             unit_of_measurement: '',
    //             instructions: '',
    //             preparation_time: '',
    //             cooking_time: '',
    //             total_time: 0,
    //             serves: '',
    //             notes: '',
    //             author: '',
    //             url: '',
    //             rating: '',
    //         })
    //     })
    // }    

    // const { name, description, ingredient_quantity, ingredients, instructions, preparation_time, cooking_time, total_time, serves, notes, author, url, rating, images } = this.state
    // const {total_time} = state
    return (
        <Wrapper>
            <Title>Update Recipe {recipe.name}</Title>
    
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Label>Name: </Label>
                    <InputText
                        value={ recipe.name }
                        name='name'
                    />
                    <ValidFeedback>Looks good!</ValidFeedback>
                    <InvalidFeedback>Recipe name is a required field!</InvalidFeedback>
                </Row>

                <RecipeCategory handleChange={props.handleChange} />

                <Row>
                    <Label>Description: </Label>
                    <TextArea
                        value={ recipe.description }
                        name='description'
                    />
                </Row>

                <InputFieldForm unit_of_measurement={recipe.unit_of_measurement} handleChange={recipe.handleChange} />

                <Row>
                    <Label>Instructions: </Label>
                    <TextArea
                        value={ recipe.instructions }
                        name='instructions'
                    />
                </Row>

                <Row>
                    <Label>Preparation Time: </Label>
                    <InputText
                        value={ recipe.preparation_time }
                        name='preparation_time'
                    />

                    <Label>Cooking Time: </Label>
                    <InputText
                        value={ recipe.cooking_time }
                        name='cooking_time'
                    />

                    {/* <Label>Total Time: </Label>
                    <CancelButton onClick={handleCalculateTotalTime}>Calculate Total</CancelButton>
                    <InputText
                        value={ total_time + ' minutes' }
                        name='total_time'
                        onChange={handleCalculateTotalTime}
                        placeholder={ total_time }
                        disabled
                    /> */}
                </Row>

                <Row>
                    <Label>Serves: </Label>
                    <InputText
                        value={ recipe.serves }
                        name='serves'
                    />

                    <Rating style={{ border: 'none' }}
                        value={ recipe.rating }
                        onChange={ handleChange }
                    />
                </Row>

                <Row>
                    <Label>Notes: </Label>
                    <TextArea
                        value={ recipe.notes }
                        name='notes'
                    />
                </Row>

                <Row>
                    <Label>Author: </Label>
                    <InputText
                        value={ recipe.author }
                        name='author'
                    />

                    <Label>URL: </Label>
                    <InputText
                        value={ recipe.url }
                        name='url'
                    />
                </Row>

                <Row>
                    <Button type="submit">Update Recipe</Button>
                    <CancelButton href={'/recipes/list'}>Cancel</CancelButton>
                </Row>
            </Form>
        </Wrapper>
    )
}

export default RecipesUpdate;