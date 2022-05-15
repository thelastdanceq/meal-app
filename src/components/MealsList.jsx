import React from 'react'
import MealsItem from './MealsItem'

export default function MealsList({ meals }) {

    return (
        <div className="meals list">
            {
                meals.map(meal => {
                    return <MealsItem key={meal.idMeal} meal={meal} />
                })
            }
        </div>
    )
}
