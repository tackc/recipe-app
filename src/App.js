import React, { Component } from 'react';
import './App.css';
// import Signin from './Authentication/Signin';
// import Categories from './pages/Categories';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RecipesList, RecipesInsert, RecipesUpdate, RecipeCard } from './pages';
import { NavBar } from './components';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
      user: null,
      error: null,
      lockedResult: '',
      categories: [
        {title: "Main Dishes", image: "https://images.squarespace-cdn.com/content/v1/500c5c5084ae823f9b01b655/1365039093930-5BR3QLB2IHTPOETFTZ7V/ke17ZwdGBToddI8pDm48kFA3ox6tkjvJAg4cVpaAsLd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Uc_UtppTR_HViSDtvCedtPpyaubBsv5LOBctt6NdG36huM5AcYPAfDpeu_8_E2r3jw/_DSC5432.jpg?format=350w"}, 
        {title: "Appetizers", image: "https://images.squarespace-cdn.com/content/v1/500c5c5084ae823f9b01b655/1365039096317-8RR15UYZYH3M7DUZH7WO/ke17ZwdGBToddI8pDm48kE0dBl2NH3FZqnEQ36vQk7d7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USktP1TqXhY4Tkzt8R3NIMXp3WxE2w03r4EM8893BLC6ItbcvNsfhsWVcDwbNYmf2w/_DSC6358.jpg?format=350w"}, 
        {title: "Side Dishes", image: "https://images.squarespace-cdn.com/content/v1/500c5c5084ae823f9b01b655/1365039088282-G40D6AFU9WDH8GR7BX0W/ke17ZwdGBToddI8pDm48kG5SpE0MsKwe7z-ir8Qvjtd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfeuwzofiI2qEUaxSckZ5lYhs9lU2Gn8Jq9_d4TmnhxuNigDb9Qy1-VAJiP9oJ1Lyw/_DSC0699.jpg?format=350w"}, 
        {title: "Desserts", image: "https://images.squarespace-cdn.com/content/v1/500c5c5084ae823f9b01b655/1365039087318-A2OSSYUAGN2RS0I5APLS/ke17ZwdGBToddI8pDm48kG5SpE0MsKwe7z-ir8Qvjtd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfeuwzofiI2qEUaxSckZ5lYhs9lU2Gn8Jq9_d4TmnhxuNigDb9Qy1-VAJiP9oJ1Lyw/_DSC0523.jpg?format=350w"}, 
        {title: "Drinks", image: "https://images.squarespace-cdn.com/content/v1/500c5c5084ae823f9b01b655/1365039092173-JT5QPKC5WA5DZSSP4039/ke17ZwdGBToddI8pDm48kO4AKunHiG7zc4-ZZTnS2rp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmQyViSO8WVy1F2YAzXWvEVO7W4LUz-e_24HUO90voNhpDx6v8d_O_OY_ESqjKVUI2/_DSC2626.jpg?format=350w"}
      ]
    }
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <NavBar />
          <Switch>
            <Route path='/login' render={ () => <p>This is the route for creating an account!</p>} />
            <Route path='/signup' render={ () => <p>This is the signup route!</p>} />
            <Route path='/recipes/list' exact component={RecipesList} />
            <Route path='/recipes/create' exact component={RecipesInsert} />
            <Route path='/recipes/update/:id' exact component={RecipesUpdate} />
            <Route exact path='/' render={ (props) => `<p>Welcome ${this.state.user}</p>` } />
          </Switch>
        </Router>
      </div>
    )
  }

  // render(props) {
  //   return (
  //     <div className="App">
  //       {/* <header className="App-header"></header> */}
  //       {/* <Signin /> */}
  //       <h1>The categories are:</h1>
  //       {this.state.categories.map(({title, image}) => 
  //         <div>
  //           <h4>{title}</h4>
  //           <img src={image} alt='{image}'></img>
  //         </div>
  //       )}
  //       <Categories categories={this.state.categories} />
  //     </div>
  //   );
  // }
}

export default App;
