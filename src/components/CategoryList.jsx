import React from 'react'
import CategoryItem from './CategoryItem'

export default function CategoryLIst(props) {
    const {categories} = props.categories;
    return (
        <div className='categories list'>
            {categories.map((category) => {
                return <CategoryItem key={category.idCategory} {...category} />
            })}
        </div>
    )
}
