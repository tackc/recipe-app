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
      categories: ["Main Dishes", "Appetizers", "Side Dishes", "Desserts", "Drinks"]
    }
  }

  render(props) {
    return (
      <div className="App">
        {/* <header className="App-header"></header> */}
        {/* <Signin /> */}
        <h1>The categories are:</h1>
        {this.state.categories.map((category) => 
          <div>
            <h4>{category}</h4>
          </div>
        )}
        <Categories categories={this.state.categories} />
      </div>
    );
  }
}

export default App;
