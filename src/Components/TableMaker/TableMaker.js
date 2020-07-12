import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap'

export default class TableMaker extends Component {
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
                        <tr key={contact.id}>
                            <td>{contact.id}</td>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.Email}</td>
                            <td>{contact.address}</td>
                            <td>{contact.birthday}</td>
                            <td>{contact.details}</td>
                            <td>
                                <Button variant="primary">+</Button>
                                <Button variant="danger">-</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }
}
