import React from 'react';
import './Categories.css';


function Categories({categories, selectCategory}){
    return(
        <div className="list-group w-100 overflow">
            {categories.map((category, index) => (
                <a key = {index} onClick = {() => selectCategory(category)} className="list-group-item list-group-item-action text-center">{category}</a>
            ))}
        </div>
    );
}

export default Categories;