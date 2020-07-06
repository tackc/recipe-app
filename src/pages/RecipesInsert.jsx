import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import apis from '../api';
import Rating from '@bit/nexxtway.react-rainbow.rating';
// import IngredientInsert from './IngredientInsert';

import styled from 'styled-components';
// import Ingredients from './ToDoListReference';
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

const RecipesInsert = () => {
    const [state, setState] = React.useState({
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

    const handleChange = async (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    }

    const handleCalculateTotalTime = async (event) => {
        const total_time = parseInt(state.preparation_time) + parseInt(state.cooking_time)
        setState({ total_time })
    }
    
    async function handleAddRecipe(props) {
        // const { name, category, description, ingredient_quantity, ingredients, instructions, preparation_time, cooking_time, total_time, serves, notes, author, url, rating, images } = state
        const payload = { ...state }

        await apis.insertRecipe(payload).then(res => {
            window.alert(`Recipe successfully added!`)
            this.setState({
                name: '',
                category: '',
                description: '',
                ingredient_quantity: '',
                unit: '',
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
                rating: '',
            })
        })
        props.history.push(`/recipes/create`)
    }

    const {total_time} = state
    return (
        <Wrapper>
            <Title>Add New Recipe</Title>

            <Form>
                <Row>
                    <Label>Name: </Label>
                    <InputText
                        type="text"
                        value={ state.name }
                        name='name'
                        onChange={handleChange}
                    />
                    <ValidFeedback>Looks good!</ValidFeedback>
                    <InvalidFeedback>Recipe name is a required field!</InvalidFeedback>
                </Row>

                <RecipeCategory handleChange={state.handleChange} />

                <Row>
                    <Label>Description: </Label>
                    <TextArea
                        type="text"
                        value={ state.description }
                        name='description'
                        onChange={handleChange}
                    />
                </Row>

                {/* <IngredientInsert /> */}
                {/* <Ingredients /> */}
                <InputFieldForm unit_of_measurement={state.unit_of_measurement} handleChange={state.handleChange} />

                <Row>
                    <Label>Instructions: </Label>
                    <TextArea
                        type="text"
                        value={ state.instructions }
                        name='instructions'
                        onChange={handleChange}
                    />
                </Row>

                <Row>
                    <Label>Preparation Time: </Label>
                    <InputText
                        type="text"
                        value={ state.preparation_time }
                        name='preparation_time'
                        onChange={handleChange}
                    />

                    <Label>Cooking Time: </Label>
                    <InputText
                        type="text"
                        value={ state.cooking_time }
                        name='cooking_time'
                        onChange={handleChange}
                    />

                    <Label>Total Time: </Label>
                    <CancelButton onClick={handleCalculateTotalTime}>Calculate Total</CancelButton>
                    <InputText
                        type="text"
                        value={ total_time + ' minutes' }
                        name='total_time'
                        onChange={handleCalculateTotalTime}
                        placeholder={ total_time }
                        disabled
                    />
                </Row>

                <Row>
                    <Label>Serves: </Label>
                    <InputText
                        type="text"
                        value={ state.serves }
                        name='serves'
                        onChange={handleChange}
                    />

                    <Rating style={{ border: 'none' }}
                        value={ state.rating }
                        onChange={ handleChange }
                    />
                </Row>

                <Row>
                    <Label>Notes: </Label>
                    <TextArea
                        type="text"
                        value={ state.notes }
                        name='notes'
                        onChange={handleChange}
                    />
                </Row>

                <Row>
                    <Label>Author: </Label>
                    <InputText
                        type="text"
                        value={ state.author }
                        name='author'
                        onChange={handleChange}
                    />

                    <Label>URL: </Label>
                    <InputText
                        type="text"
                        value={ state.url }
                        name='url'
                        onChange={handleChange}
                    />
                </Row>

                <Row>
                    <Button onClick={handleAddRecipe}>Add Recipe</Button>
                    <CancelButton href={'/recipes/list'}>Cancel</CancelButton>
                </Row>
            </Form>
        </Wrapper>
    )
}

export default RecipesInsert;
