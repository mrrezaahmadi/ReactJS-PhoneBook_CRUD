import React from 'react'
import ContactCard from '../ContactCard/ContactCard'
import './ContactsContainer.scss'


function ContactsContainer(props) {
    const { contacts } = props


    return (
        <div className='ContactsContainer'>
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
