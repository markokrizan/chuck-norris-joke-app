import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Header from '../header/Header';
import Categories from '../categories/Categories';
import Favourites from '../favourites/Favourites'
import Joke from '../joke/Joke';
import Footer from '../footer/Footer';
import JokeService from '../../services/JokeService';
import './App.css';
import Jokes from './../jokes/Jokes';
import About from './../about/About';
import Carrer from './../carrer/Carrer';
import Contact from './../contact/Contact';


class App extends Component {

  state = {
    categories : [],
    favouriteCategories : [],
    currentCategory : '',
    joke : '',
    
  }

  componentDidMount = async () => {
    const categories = await JokeService.getCategories();
    this.setState({categories : categories});
  }

  selectCategory = async (categoryName) =>{
    const joke = await JokeService.getJoke(categoryName);
    this.setState({joke : joke, currentCategory: categoryName});
  }

  //API doesent provide the cateogory within the joke
  addCategoryToFavourites = () => {
    if(!this.state.favouriteCategories.includes(this.state.currentCategory)){
      this.setState({
        favouriteCategories : [...this.state.favouriteCategories, this.state.currentCategory]
      })
    }else{
      alert("Category already in favourites!");
    }
    
  }

  render(){
    return (
      <Router>
        <Header/>
        <main>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Jokes
                categories = {this.state.categories} 
                selectCategory = {this.selectCategory} 
                favourites = {this.state.favouriteCategories} 
                selectCategory = {this.selectCategory} 
                joke = {this.state.joke} 
                currentCategory = {this.state.currentCategory} 
                addCategoryToFavourites = {this.addCategoryToFavourites}/> 
            )}
          />
          <Route
            path="/about"
            exact
            component={About}
          />
          <Route
            path="/carrer"
            exact
            component={Carrer}
          />
          <Route
            path="/contact"
            exact
            component={Contact}
          />
        </Switch>
        </main>
        <Footer/>
      </Router >
    );
  }
}

export default App;
