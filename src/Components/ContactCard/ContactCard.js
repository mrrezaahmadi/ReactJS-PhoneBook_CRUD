import React from 'react'
import { Link } from 'react-router-dom'


function ContactCard(props) {
    const { contact } = props

    return (
        <Link to={`/contact/${contact.id}`}>
            <tr>{contact.firstName}</tr>
        </Link>
    )
}

export default ContactCard
