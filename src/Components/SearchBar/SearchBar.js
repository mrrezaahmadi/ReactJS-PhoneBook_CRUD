import React from 'react'
import './SearchBar.scss'
import { setSearch } from '../../redux/contacts/contacts.actions'
import { connect } from 'react-redux'


function SearchBar({setSearch}) {
    return (
        <div className="SearchBar">
            <input onChange={e => setSearch(e.target.value)} placeholder="Search the contact ... " />
        </div>
    )
}

export default connect(null, { setSearch })(SearchBar)