import React, { Component } from 'react';

import styled from 'styled-components';

const Title = styled.h1.attrs({
    className: 'h1',
})`
    margin: 0 auto;
`

const Wrapper = styled.div.attrs({
    className: 'category-wrapper'
})`
    margin: 0 auto;
`
const Button = styled.button.attrs({
    className: 'overlay-button'
})`
    margin: 0 auto;
    width: 100%;
    height: 100%;
`

class Categories extends Component {
    render() {
        return (
            <Wrapper>
                <Button />>
                <Title />
            </Wrapper>
        )
    }
}

export default Categories;