import React, { useEffect, useState } from 'react'
import { getCategories } from '../api'
import { useSearchParams } from 'react-router-dom'
import Preloader from '../components/Preloader'
import CategoryList from '../components/CategoryList'
import Search from '../components/Search'

export default function Home() {
    const [filteredCategories, setFilteredCategories] = useState([])
    const [categories, setCatefories] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const [queryParams, setQueryParams] = useSearchParams();

    useEffect(() => {
        getCategories().then(data => {
            setCatefories(data.categories);
            setFilteredCategories(data.categories.filter((item) => {
                return item.strCategory.toLowerCase().includes((queryParams.get('category') || "").toLowerCase())
            }))
        }).then(() => setIsLoading(false));
    }, [queryParams])

    const handleSearch = (str) => {
        setFilteredCategories(
            categories.filter(filtCat => {
                return filtCat.strCategory.toLowerCase().includes(str.toLowerCase())
            })
        )
        setQueryParams({ category: str });
    }

    return (
        <>
            <Search cb={handleSearch} params={queryParams.get('category') || ""} />
            {isLoading ? <Preloader /> : (
                <CategoryList categories={filteredCategories} />
            )}
        </>
    )
}
