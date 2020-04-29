import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Collapse = styled.div.attrs({
    className: 'collapse navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collapse navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to='/' className='navbar-brand'>
                    Recipe App
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to='/recipes/list' className='nav-link'>
                                Recipes
                            </Link>
                        </Item>
                        <Item>
                            <Link to='/recipes/create' className='nav-link'>
                                Add Recipe
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links;
