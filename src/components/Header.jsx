import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to='/' className="brand-logo center">Happy Meals</Link>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                </ul>
            </div>
        </nav>
    )
}
