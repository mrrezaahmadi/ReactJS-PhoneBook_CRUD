import React from 'react'
import { Button } from 'react-bootstrap'



function ContactCard(props) {
    const { contact, remove } = props
    return (
        <tr>
            <td>{contact.id}</td>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
            <td>{contact.address}</td>
            <td>{contact.birthday}</td>
            <td>{contact.details}</td>
            <td>
                <Button variant="primary">Edit</Button>
                <Button variant="danger" onClick={() => remove(contact.id)}>Remove</Button>
            </td>
        </tr>
    )
}

export default ContactCard
