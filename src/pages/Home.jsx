import React, { useEffect, useState } from 'react'
import { getCategories } from '../api'
import Preloader from '../components/Preloader'
import CategoryList from '../components/CategoryList'

export default function Home() {
    const [categories, setCatefories] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCategories().then(data => setCatefories(data)).then(() => setIsLoading(false));
    }, [])



    return (
        <>
            {isLoading ? <Preloader /> : (
                <CategoryList categories={categories} />
            )}
        </>
    )
}
