import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getMealById } from '../api'
import PreLoader from './Preloader';
import MealDetails from './MealDetails';

export default function Meal() {
    const params = useParams();
    const [mealDetails, setMealDetails] = useState([])
    useEffect(() => {
        getMealById(params.id).then(data => setMealDetails(data.meals))
    }, [params.id])
    return (
        <>
            {
                !mealDetails.length ? <PreLoader /> : <MealDetails mealDetails={mealDetails} />
            }
        </>
    )
}
