import React from 'react'
import CategoryItem from './CategoryItem'

export default function CategoryList(props) {
    const { categories } = props;
    return (
        <div className='categories list'>
            {categories.map((category) => {
                return <CategoryItem key={category.idCategory} {...category} />
            })}
        </div>
    )
}
