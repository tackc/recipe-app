import React, { Component } from 'react';
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
const FormGroup = styled.div.attrs({
    className: 'col'
})``

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

class MeasurementsDropdown extends Component {
    constructor({ unit_of_measurement }) {
        super();
        this.state = {
            unit_of_measurement: unit_of_measurement
        }
    }

    // This current implementation isn't ideal as I have two "sources of truth" for unit_of_measurement
    handleChange = () => {
        this.setState({
            unit_of_measurement: this.unit_of_measurement
        })
    }

    render(){
        return(
            <Wrapper>
                <Label>Unit: </Label>
                <DropdownWrapper>
                    <DropdownSelect name='unit_of_measurement' onChange={this.handleChange} value={this.unit_of_measurement}>
                        <DropdownItem value='' defaultValue='selected'>Unit</DropdownItem>
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
}

export default MeasurementsDropdown;
