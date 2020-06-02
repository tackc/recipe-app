import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

class Links extends Component {
    render() {
        return (
            <List>
                <Link className='nav-item nav-link active' to='/'>Home <span className="sr-only">(current)</span></Link>
                <Link className='nav-item nav-link' to='/recipes/list'>Recipes</Link>
                <Link className='nav-item nav-link' to='/recipes/create'>Add Recipe</Link>
                <Link className='nav-item nav-link' to='/login'>Log In</Link>
            </List>
        )
    }
}

export default Links;
