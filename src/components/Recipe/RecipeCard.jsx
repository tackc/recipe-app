import React from 'react';
import styled from 'styled-components';

/* Color Theme Swatches in RGBA */
// Primary-1-rgba { color: rgba(242, 75, 48, 1); }
// Primary-1-rgba { color: rgba(242, 202, 4, 1); }
// Primary-2-rgba { color: rgba(0, 125, 251, 1); }
// Primary-5-rgba { color: rgba(1, 189, 103, 1); }

const Wrapper = styled.div.attrs({
    className: 'm-1 p-3'
})`
    width: 300px;
    height: 350px;
    background-color: rgba(0, 125, 251, 1);
    box-shadow: rgba(25, 28, 31, 0.08) 0px 14px 32px, rgba(25, 28, 31, 0.04) 0px 8px 16px, rgba(25, 28, 31, 0.04) 0px -1px 0px;
    border-radius: 1em;
`

const RecipeName = styled.h3`
    color: white
`

const RecipeDescription = styled.body`
    color: #222;
`

const RecipeCard = (props) => {
    return(
        <Wrapper>
            <RecipeName>{props.name}</RecipeName>
            <RecipeDescription>{props.description}</RecipeDescription>
        </Wrapper>
    )
}

export default RecipeCard;