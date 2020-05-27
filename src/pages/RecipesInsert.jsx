import React from 'react';
import api from '../api';
import IngredientInsert from './IngredientInsert';

import styled from 'styled-components';
// import Ingredients from './ToDoListReference';

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

const DropdownWrapper = styled.div.attrs({
    className: 'col'
})`margin: auto`

const DropdownSelect = styled.select.attrs({
    className: 'btn'
})``

const DropdownItem = styled.option``

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

export default function RecipesInsert() {
    const [state, setState] = React.useState({
        name: '',
        category: '',
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
    });

    async function handleChange(event) {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    }
    
    // async function handleChangeCategory(event) {
    //     const category = event.target.value
    //     this.setState({ category })
    // }

    // handleCalculateTotalTime = async event => {
    //     const total_time = this.state.preparation_time + this.state.cooking_time
    //     this.setState({ total_time })
    // }
    
async function handleAddRecipe() {
    // const { name, category, description, ingredient_quantity, ingredients, instructions, preparation_time, cooking_time, total_time, serves, notes, author, url, rating, images } = state
    const payload = { ...state }

    await api.insertRecipe(payload).then(res => {
        window.alert(`Recipe successfully added!`)
        this.setState({
            name: '',
            category: '',
            description: '',
            ingredient_quantity: '',
            unit: '',
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
        })
    })
}

// const { name, category, description, ingredient_quantity, ingredients, instructions, preparation_time, cooking_time, total_time, serves, notes, author, url, rating, images } = this.state
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

            <Row>
                <Label>Category: </Label>
                <DropdownWrapper>
                    <DropdownSelect name='category' onChange={handleChange} value={state.category}>
                        <DropdownItem value='' defaultValue='selected'>Select a Category</DropdownItem>
                        <DropdownItem value='Appetizer'>Appetizer</DropdownItem>
                        <DropdownItem value='Soup'>Soup</DropdownItem>
                        <DropdownItem value='Salad'>Salad</DropdownItem>
                        <DropdownItem value='Side'>Side Dish</DropdownItem>
                        <DropdownItem value='Main'>Main Dish</DropdownItem>
                        <DropdownItem value='Dessert'>Dessert</DropdownItem>
                    </DropdownSelect>
                </DropdownWrapper>
            </Row>

            <Row>
                <Label>Description: </Label>
                <TextArea
                    type="text"
                    value={ state.description }
                    name='description'
                    onChange={handleChange}
                />
            </Row>

            <IngredientInsert />
            {/* <Ingredients /> */}

            {/* <Row>
                <Label>Ingredient Quantity: </Label>
                <InputText
                    type="text"
                    value={ state.ingredient_quantity }
                    name='ingredient_quantity'
                    onChange={handleChange}
                />

                <Label>Unit: </Label>
                <DropdownWrapper>
                    <DropdownSelect name='unit' onChange={handleChange} value={state.unit}>
                        <DropdownItem value='' defaultValue='selected'>Select a Unit of Measurement</DropdownItem>
                        <DropdownItem value='pinch'>Pinch</DropdownItem>
                        <DropdownItem value='Teaspoon'>Teaspoon</DropdownItem>
                        <DropdownItem value='Tablespoon'>Tablespoon</DropdownItem>
                        <DropdownItem value='Fluid ounce'>Fluid ounce</DropdownItem>
                        <DropdownItem value='Cup'>Cup</DropdownItem>
                        <DropdownItem value='Pint'>Pint</DropdownItem>
                        <DropdownItem value='Quart'>Quart</DropdownItem>
                        <DropdownItem value='Gallon'>Gallon</DropdownItem>
                    </DropdownSelect>
                </DropdownWrapper>

                <Label>Ingredients: </Label>
                <InputText
                    type="text"
                    value={ state.ingredients }
                    name='ingredients'
                    onChange={handleChange}
                />
            </Row> */}

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
                <InputText
                    type="text"
                    value={ state.total_time }
                    name='total_time'
                    onChange={handleChange}
                    placeholder={ state.total_time }
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

                <Label>Rating: </Label>
                <InputText
                    type="number"
                    step="1"
                    lang="en-US"
                    min="0"
                    max="5"
                    pattern="[0-5]+([,\.][0-5]+)?"
                    value={ state.rating }
                    name='rating'
                    onChange={handleChange}
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
                    name='author'
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