import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <div>
                Ingredients
                </div>
            <ol>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <div>
                Calories
                </div>
            <p>{calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
};

export default Recipe;