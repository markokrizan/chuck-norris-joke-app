import React from 'react';

function Joke({joke, currentCategory, addCategoryToFavourites}){

    if(joke === "" || joke === null || joke === undefined){
        return (
            <div className="card">
                <div className="card-body">
                <h5 className="card-title"><b>Select a category!</b></h5>
                </div>
            </div>
        );
    }else{
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"><b>Random joke from {currentCategory} category:</b></h5>
                    <p className="card-text">{joke.value}</p>
                    <a onClick = {addCategoryToFavourites} className="card-link">Add this category to favourites</a>
                </div>
            </div>
        );
    }
    
}

export default Joke;