import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class ContactCard extends Component {
    render() {
        const { contact } = this.props
        return (
            <tr>
                <td>{contact.id}</td>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.phone}</td>
                <td>{contact.Email}</td>
                <td>{contact.address}</td>
                <td>{contact.birthday}</td>
                <td>{contact.details}</td>
                <td>
                    <Button variant="primary">Edit</Button>
                    <Button variant="danger" onClick={() => this.props.remove(contact.id)}>Remove</Button>
                </td>
            </tr>
        )
    }
}
