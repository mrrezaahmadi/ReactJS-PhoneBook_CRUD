import React from 'react'
import './SearchBar.scss'



function SearchBar(props) {
    return (
        <div className="SearchBar">
            <input onChange={e => props.filter(e)} placeholder="Search the contact ... " />
        </div>
    )
}

export default SearchBar