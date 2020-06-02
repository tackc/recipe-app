import React, { Component } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.form.attrs({
    className: 'form-inline my-2 my-lg-0'
})``

const SearchInput = styled.input.attrs({
    className: 'form-control mr-sm-2',
    type: 'search',
    placeholder: 'Search (not working yet...)',
})``

const SearchButton = styled.button.attrs({
    className: 'btn btn-outline-success my-2 my-sm-0',
    type: 'submit'
})``

class Search extends Component {
    render() {
        return (
            <SearchContainer>
                <SearchInput aria-label="Search" />
                <SearchButton>Search</SearchButton>
            </SearchContainer>
        )
    }
}

export default Search;