import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getMealsByCatName } from '../api';
import PreLoader from './Preloader';
import MealsList from './MealsList';

export default function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        getMealsByCatName(name).then(data => {
            setMeals(data.meals);   
        })
    }, [name])
    return (
        <>
            {
                !meals.length ? <PreLoader /> : <MealsList meals={meals} />
            }
        </>
    )
}
