import React, { Component } from 'react';
import ReactTable from 'react-table';
import api from '../api';

import styled from 'styled-components';

import 'react-table/react-table.css';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateRecipe extends Component {
    updateRecipe = event => {
        event.preventDefault()
        window.location.href = `/recipes/${this.props.id}/edit`
    }

    render() {
        return <Update onClick={this.updateRecipe}>Update</Update>
    }
}

class DeleteRecipe extends Component {
    deleteRecipe = event => {
        event.preventDefault()

        if (
            window.confirm(`Do you want to delete the recipe ${this.props.id} permanently?`)
        ) {
            api.deleteRecipeById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onclick={this.deleteRecipe}>Delete</Delete>
    }
}

class RecipesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getRecipes().then(recipes => {
            this.setState({
                recipes: recipes.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { recipes, isLoading } = this.state
        console.log('TCL: RecipesList -> render -> recipes', recipes)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateRecipe id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteRecipe id={props.original._id} />
                        </span>
                    )
                }
            },
        ]
        let showTable = true;
        if(!recipes.length) {
            showTable = false
        }
        
        return (
            <Wrapper>
                {showTable && (
                    <ReactTable 
                        data={recipes}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default RecipesList;