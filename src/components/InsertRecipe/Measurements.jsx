import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs()``

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

const InputText = styled.input.attrs({
    className: 'col'
})``

const DropdownWrapper = styled.div.attrs({
    className: 'col'
})`margin: auto`

const DropdownSelect = styled.select.attrs({
    className: 'btn'
})``

const DropdownItem = styled.option``

export default function MeasurementsDropdown(props) {
    return(
        <Wrapper>
            <Label>Ingredient Quantity: </Label>
            <InputText
                type="text"
                value={ props.ingredient_quantity }s
                name='ingredient_quantity'
                onChange={props.handleChange}
            />

            <Label>Unit: </Label>
            <DropdownWrapper>
                <DropdownSelect name='unit' onChange={props.handleChange} value={props.unit_of_measurement}>
                    <DropdownItem value='' defaultValue='selected'>Unit of Measurement</DropdownItem>
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
        </Wrapper>
    )
}