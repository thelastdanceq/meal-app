import React, { useEffect, useState } from 'react'

export default function Search({ cb, params }) {
    const [search, setSearch] = useState('');

    useEffect(() => {
        setSearch(params);
    }, [params])


    const handleSubmit = () => {
        cb(search)
    }


    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            cb(search);
        }
    }


    const handleChange = (value) => {
        setSearch(value)
    }


    return (
        <div className="row">
            <div className="input-field col s12">
                <input type="search"
                    value={search}
                    onKeyDown={(e) => {
                        handleKeyDown(e)
                    }}
                    onChange={(e) => {
                        handleChange(e.target.value);
                    }}
                />
                <button
                    className='btn red lighten-3'
                    onClick={() => handleSubmit()}
                >Search</button>
            </div>

        </div>
    )
}
