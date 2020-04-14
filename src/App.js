import React, { Component } from 'react';
import './App.css';
// import Signin from './Authentication/Signin';
import Categories from './pages/Categories';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
      user: null,
      error: null,
      lockedResult: '',
      categories: [
        {title: "Main Dishes", image: "#"}, 
        {title: "Appetizers", image: "#"}, 
        {title: "Side Dishes", image: "#"}, 
        {title: "Desserts", image: "#"}, 
        {title: "Drinks", image: "#"}
      ]
    }
  }

  render(props) {
    return (
      <div className="App">
        {/* <header className="App-header"></header> */}
        {/* <Signin /> */}
        <h1>The categories are:</h1>
        {this.state.categories.map(({title, image}) => 
          <div>
            <h4>{title}</h4>
            <img src='{image}' alt='{image}'></img>
          </div>
        )}
        <Categories categories={this.state.categories} />
      </div>
    );
  }
}

export default App;
