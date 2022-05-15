import React from 'react'

export default function MealDetails({ mealDetails }) {
    const {
        strMeal,
        strCategory,
        strInstructions,
        strMealThumb,
        strYoutube
    } = mealDetails[0];
    return (
        <div className="meal">
            <img src={strMealThumb} alt={strMeal} width="250px" height="250px" />
            <p>{strMeal}</p>
            <p>{strCategory}</p>
            <p>{strInstructions}</p>
            <table>
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Measure</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(mealDetails[0]).map(key => {
                            if (key.includes("Ingredient") && mealDetails[0][key]) {
                                return (
                                    <tr>
                                        <td>{mealDetails[0][key]}</td>
                                        <td>{mealDetails[0][`strMeasure` + key.slice(13)]}</td>
                                    </tr>
                                )
                            }
                            return null;
                        })
                    }
                </tbody>
            </table>
            <div className='video-play'>
                <h4>Video Recipe</h4>
                {
                    strYoutube && <iframe src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`} title="YouTube video player" frameborder="0" allowFullScreen></iframe>
                }</div>
        </div>
    )



}
