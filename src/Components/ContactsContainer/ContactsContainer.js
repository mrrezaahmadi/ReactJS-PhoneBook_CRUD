import React from 'react'
import { Table } from 'react-bootstrap'
import ContactCard from '../ContactCard/ContactCard'


function ContactsContainer(props) {
    const { contacts, remove, editContactHandler } = props


    return (
        <Table responsive hover striped className="my-2">
            <thead className="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Phone No.</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Birthday</th>
                    <th>Details</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map(contact => (
                    <ContactCard contact={contact} key={contact.id} remove={remove} editContactHandler={editContactHandler} />
                ))}
            </tbody>
        </Table>
    )
}

export default ContactsContainer
