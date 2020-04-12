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

  render() {
    return (
      <div className="App">
        {/* <header className="App-header"></header> */}
        {/* <Signin /> */}
        <Categories />
      </div>
    );
  }
}

export default App;
