import React from 'react'
import ContactCard from '../ContactCard/ContactCard'
import SearchBar from '../SearchBar/SearchBar'
import './ContactsContainer.scss'
import { Link } from 'react-router-dom'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'



function ContactsContainer({ contacts, search }) {
    
    let filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()) || contact.phone.toString().includes(search))

    return (
        <div className='ContactsContainer'>
            <div className="ContactsContainer-navbar">
                <div className="navbar-photo">
                    <img src={'https://api.adorable.io/avatars/256/Ali@adorable.png'} alt='profile' />
                </div>
                <div className="navbar-title">Phone Book</div>
                <div className="navbar-btn">
                    <Link to='/add'>
                        <button><FontAwesomeIcon icon={faPlus} /></button>
                    </Link>
                </div>
            </div>
            <SearchBar />
            <div className="table-header">
                <table>
                    <thead>
                        <tr>
                            <th>Recents</th>
                            <th>Favorites</th>
                            <th>Missed</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="table-body">
                <table>
                    <tbody>
                        {filteredContacts.map(contact => (
                            <tr>
                                <ContactCard contact={contact} key={contact.id} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts.contacts,
        search: state.contacts.search
    }
}

export default connect(mapStateToProps)(ContactsContainer)
