import React, { Component } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
// import { GlobalStyles } from './global';
import { theme } from './theme';

// import Categories from './pages/Categories';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RecipesList, RecipesInsert, RecipesUpdate, RecipeCard } from './pages';
import { NavBar } from './components';
import { Signup, Login, Welcome } from './components/Authentication'

import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

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
    this.checkForLocalToken = this.checkForLocalToken.bind(this)
    this.logout = this.logout.bind(this)
    this.liftTokenToState = this.liftTokenToState.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  liftTokenToState(data) {
    this.setState({
      token: data.token,
      user: data.user,
    })
  }

  handleClick(e) {
    e.preventDefault()
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
    axios.get('/locked/test').then( result => {
      this.setState({
        lockedResult: result.data
      })
    })
  }

  logout() {
    localStorage.removeItem('mernToken')
    this.setState({
      token: '',
      user: null,
    })
  }

  checkForLocalToken() {
    // Check local storage for a token
    let token = localStorage.getItem('mernToken')
    if (!token || token === 'undefined') {
      // No token was found...do the following:
      localStorage.removeItem('mernToken')
      this.setState({
        token: '',
        user: null,
      })
    } else {
      // A token was found! Send it to be validated
      Axios.post('/auth/me/from/token', {
        token
      }).then( result => {
        if (result.data.type !== 'success') {
          this.setState({
            error: result.data
          })
        } else {
          // Save the token in localStorage
          localStorage.setItem('mernToken', result.data.token)
          this.setState({
            token: result.data.token,
            user: result.data.user,
          })
        }
      })
    }
  }

  componentDidMount() {
    this.checkForLocalToken()
  }

  render() {
    return (
      <div className='App'>
        <ThemeProvider theme={theme}>
          {/* <GlobalStyles /> */}
          <Router>
            <NavBar user={this.state.user} />
            <Switch>
              <Route path='/login' render={() => <Login liftTokenToState={this.liftTokenToState} />} />
              <Route path='/signup' render={() => <Signup liftTokenToState={this.liftTokenToState} /> } />
              <Route path='/ingredients' render={ () => <p>This is the ingredients route!</p>} />
              <Route path='/recipes/list' exact component={RecipesList} />
              <Route path='recipes/:id' exact component={RecipeCard} />
              <Route path='/recipes/create' exact component={RecipesInsert} />
              <Route path='/recipes/update/:id' exact component={RecipesUpdate} />
              <Route exact path='/' render={ (props) => <Welcome user={this.state.user}/> } />
            </Switch>
          </Router>
        </ThemeProvider>
      </div>
    )
  }
}

export default App;
