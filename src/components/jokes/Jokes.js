import React, {Component} from 'react';
import Categories from './../categories/Categories';
import Favourites from './../favourites/Favourites';
import Joke from './../joke/Joke';

export default class Jokes extends Component{

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 h-100 border-right">
                        <Categories categories = {this.props.categories} selectCategory = {this.props.selectCategory}/>
                    </div>
                    <div className="col-md-6 h-100">
                        <Favourites favourites = {this.props.favourites} selectCategory = {this.props.selectCategory}/>
                        {/* Current category passed only because the API doesent provide it with the joke entity */}
                        <Joke joke = {this.props.joke} currentCategory = {this.props.currentCategory} addCategoryToFavourites = {this.props.addCategoryToFavourites}/>
                    </div>
                </div>
            </div>
        );
    }
        
}
