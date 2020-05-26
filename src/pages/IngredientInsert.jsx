import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: 'container border-top border-bottom p-4 my-5'
})``

const Title = styled.h5.attrs({
    className: 'text-center'
})``

// ––––––––––––––––––––––––––––––– Form Components ––––––––––––––––––––––––––––––– //
const Input = styled.input.attrs({
    placeholder: 'Add ingredients here...',
    autocomplete: "off",
})``

const RemoveIngredientBtn = styled.button.attrs({
    className: 'btn btn-outline-danger btn-sm'
})``

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleNewIngredientAddition = this.handleNewIngredientAddition.bind(this);
	}
	
	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}
	
	handleNewIngredientAddition() {
		if(this.input.value !== '') {
			this.props.addIngredient(this.input.value);
			this.setState({
				value: ''
			});
			this.input.placeholder = "Add ingredient here...";
		}
	}
	
	render() {
		return (
			// ref should be passed a callback with underlying dom element as its
			// argument to get its reference 
			<div className='text-center'>
                <Input
                    ref={node => { this.input = node }}
					value={this.state.value}
					onChange={this.handleChange}
                />
				{/* <input 
					ref={node => { this.input = node }}
					value={this.state.value}
					placeholder="Add ingredients here..."
					autocomplete="off"
					onChange={this.handleChange}
				/> */}

				<button onClick={this.handleNewIngredientAddition}>	
					+
				</button>	
			</div>
		);
	}
}

const Ingredient = ({ingredient, remove}) => {
	// single ingredient 
	return (
		<p className="ingredients">
			{ingredient.value}
			<span 
				className="removeBtn mx-3"
				onClick={()=> {
					remove(ingredient.id)
				}}>
				<RemoveIngredientBtn>x</RemoveIngredientBtn>
			</span>
		</p>
	);
};

const List = ({ingredients, remove}) => {
	let allIngredients = [];
	
	if(ingredients.length > 0) {
		allIngredients = ingredients.map(ingredient => {
			// passing ingredient and remove method reference
			return (<Ingredient ingredient={ingredient} remove={remove} />);
			//return (<p>{ingredient.value}</p>);
		});
	} else {
		allIngredients.push(<p className='text-center my-5'>Add some ingredients!</p>);	
	}
	
	return (
		<div className='text-center my-5'>
			{allIngredients}
		</div>
	);
};

class IngredientInsert extends React.Component {
	constructor(props) {
		super(props);
		// data for introduction to app
		// for new users
		const introData = [
			// {
			// 	id: -3, 
			// 	value: "Hi! This is a simple ingredient list app made by REACT <3"
			// },
			// {
			// 	id: -2,
			// 	value: "Hover over ingredients and click on `X` to delete them!"
			// },
			// {
			// 	id: -1,
			// 	value: "Add new ingredients and come back any time later, I will save them for you!"
			// }
		];
		
		const localData = localStorage.ingredients && JSON.parse(localStorage.ingredients);

		this.state = { 
			data: localData || introData
		};
		
		// binding methods
		this.addIngredient = this.addIngredient.bind(this);
		this.removeIngredient = this.removeIngredient.bind(this);
	}
	// Handler to update localStorage
	updateLocalStorage() {
		if (typeof(Storage) !== "undefined")
			localStorage.ingredients = JSON.stringify(this.state.data);
	}
	// Handler to add ingredient
	addIngredient(val) {
		let id;
		// if localStorage is available then increase localStorage count
		// else use global window object's id variable
		if (typeof(Storage) !== "undefined") {
			id = Number(localStorage.count);
			localStorage.count = Number(localStorage.count) + 1;
		} else {
			id = window.id++;
		}
		
		const ingredient = { 
			value: val, 
			id: id 
		};
		
		this.state.data.push(ingredient);
		// update state
		this.setState({
			data: this.state.data
		}, () => {
			// update localStorage
			this.updateLocalStorage();
		});
	}
	// Handler to remove ingredient
	removeIngredient(id) {
		// filter out the ingredient that has to be removed
		const list = this.state.data.filter(ingredient => {
			if (ingredient.id !== id)
				return ingredient;
		});
		// update state
		this.setState({
			data: list
		}, () => {
			// update localStorage
			this.updateLocalStorage();
		});
	}
	
	componentDidMount() {
		localStorage.clear();
		if (typeof(Storage) !== "undefined") {
			if(!localStorage.ingredients) {
				localStorage.ingredients = JSON.stringify(this.state.data);
			}
			if(!localStorage.count) {
				localStorage.count = 0;
			}

		} else {
            console.log("%cApp will not remember ingredients created as LocalStorage Is Not Available", "color: hotpink; background: #333; font-size: x-large;font-family: Courier;");
			window.id = 0;
		}
	}
	
	render() {
		return (
			<Wrapper>
				<Title>Ingredients</Title>
				<Form addIngredient={this.addIngredient} />
				<List ingredients={this.state.data} remove={this.removeIngredient} />
            </Wrapper>
		);
	}
}

export default IngredientInsert;