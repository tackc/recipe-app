import React, { useState, Fragment } from 'react';
import styled from 'styled-components';

import Measurements from './Measurements';

const Wrapper = styled.div.attrs({
    className: 'container border-top border-bottom p-4 my-5'
})``

const Title = styled.h5.attrs({
    className: 'text-center'
})``

const Row = styled.div.attrs({
    className: 'row form-group m-4'
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
    className: 'col',
    type: 'text'
})``

const Button = styled.button.attrs({
    type: 'button',
    className: 'btn'
})``

const InputFieldForm = (props) => {
    const [inputFields, setInputFields] = useState([
        { ingredientQuantity: '', ingredientUnit: '', ingredient: '' }
    ]);

    const handleAddFields = () => {
        const values = [...inputFields];
        values.push({ ingredientQuantity: '', ingredientUnit: '', ingredient: '' });
        setInputFields(values);
    };

    const handleRemoveFields = index => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };

    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        if (event.target.name === "ingredient") {
            values[index].ingredient = event.target.value;
        } else {
            values[index].lastName = event.target.value;
        }

        setInputFields(values);
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("inputFields", inputFields);
    };

    return (
        <Wrapper>
            <Title>Ingredients</Title>
            <form onSubmit={handleSubmit}>
                {inputFields.map((inputField, index) => (
                    <Fragment key={`${inputField}~${index}`}>
                        <Row>
                            <Measurements unit_of_measurement={props.unit_of_measurement} handleChange={props.handleChange} />
                            
                            <Label htmlFor="ingredient">Ingredient</Label>
                            <InputText
                                id="ingredient"
                                name="ingredient"
                                value={inputField.ingredient}
                                onChange={event => handleInputChange(index, event)}
                            />

                            <Button
                                className="btn btn-link"
                                onClick={() => handleRemoveFields(index)}
                                >
                                -
                            </Button>
                            <Button
                                className="btn btn-link"
                                onClick={() => handleAddFields()}
                                >
                                +
                            </Button>
                        </Row>

                    </Fragment>
                ))}

                {/* <div className="submit-button">
                    <button
                        className="btn btn-primary mr-2"
                        type="submit"
                        onSubmit={handleSubmit}
                    >
                        Save
                    </button>
                </div> */}

                <br/>
                <pre>
                    {JSON.stringify(inputFields, null, 2)}
                </pre>
            {/* </form> */}
        </Wrapper>
    );
};

export default InputFieldForm;
