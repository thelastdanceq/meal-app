import React from 'react'
import { Link } from 'react-router-dom';

export default function Meal(props) {
    const { strMeal, strMealThumb, idMeal } = props.meal;
    return (
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content">
                <span className="card-title" style={{ color: "black" }}>{strMeal}</span>
            </div>
            <div className="card-action">
                <Link to={`/meal/${idMeal}`}>Watch recipe</Link>
            </div>
        </div >
    )
}
