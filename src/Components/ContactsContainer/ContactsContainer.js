import React from 'react'
import ContactCard from '../ContactCard/ContactCard'
import SearchBar from '../SearchBar/SearchBar'
import './ContactsContainer.scss'
import { Link } from 'react-router-dom'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function ContactsContainer(props) {
    const { contacts, filter } = props


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
            <SearchBar filter={filter} />
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
                        {contacts.map(contact => (
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

export default ContactsContainer
