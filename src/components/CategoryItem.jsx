import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryItem({
    idCategory,
    strCategory,
    strCategoryThumb,
    strCategoryDescription
}) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory} />
            </div>
            <div className="card-content">
                <span className="card-title" style={{ color: "black" }}>{strCategory}</span>
                <p>{strCategoryDescription.slice(0, 100) + '...'}</p>
            </div>
            <div className="card-action">
                <Link to={`/category/${strCategory}`}>Watch category</Link>
            </div>
        </div >
    )
}
