import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import ContactCard from '../ContactCard/ContactCard'

export default class ContactsContainer extends Component {
    render() {
        const { contacts } = this.props
        return (
            <Table responsive hover striped>
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
                        <ContactCard contact={contact} key={contact.id} remove={this.props.remove}/>
                    ))}
                </tbody>
            </Table>
        )
    }
}
