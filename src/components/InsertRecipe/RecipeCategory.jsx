import React from 'react';
import styled from 'styled-components';

const Row = styled.div.attrs({
    className: 'form-group m-4'
})``

const Label = styled.label.attrs({
    className: 'font-weight-bold text-left mb-0'
})`
    display: block;
    padding-left: 2px;
    padding-bottom: 2px;
    font-size: .8em;
`

const DropdownWrapper = styled.div.attrs({
    className: 'col'
})`margin: auto`

const DropdownSelect = styled.select.attrs({
    className: 'btn'
})``

const DropdownItem = styled.option``

const RecipeCategory = (props) => {
    return(
        <Row>
            <Label>Category: </Label>
            <DropdownWrapper>
                <DropdownSelect name='category' onChange={props.handleChange} value={props.category}>
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

    )
}

export default RecipeCategory;