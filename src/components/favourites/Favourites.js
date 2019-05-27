import React, {Component} from 'react';
import './Favourites.css';

class Favourites extends Component{

    handleChange = (e) => {
        this.props.selectCategory(e.target.value);
    }

    render(){
        return(
            <div className = "favourites">
                Favorites:
                <select onChange={this.handleChange}>
                    {this.props.favourites.map((favourite, index) => (
                        <option key={index} value={favourite}>{favourite}</option>
                    ))}
                </select>
            </div>

        );
    }

} 

export default Favourites;