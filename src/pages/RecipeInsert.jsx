import React, { Component } from 'react';
import api from '../../routes/api';

import styled from 'styled-components';

const Wrapper = styled.div`margin: 0 2em`

const Title = styled.h1`margin: 0 auto;`

const Label = styled.label`margin .5em`

const InputText = styled.input`margin: .5em`

const Button = styled.button``

const CancelButton = styled.a`margin: 1em 1em 1em .4em`

class RecipeInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            description: '',
            ingredientQuantity: '',
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

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputDescription = async event => {
        const description = event.target.value
        this.setState({ description })
    }

    render() {
        const { name, description, ingredientQuantity, ingredients, instructions, preparation_time, cooking_time, total_time, serves, notes, author, url, rating, images } = this.state
        return (
            <Wrapper>
                <Title>Create Recipe</Title>
            </Wrapper>
        )
    }
}