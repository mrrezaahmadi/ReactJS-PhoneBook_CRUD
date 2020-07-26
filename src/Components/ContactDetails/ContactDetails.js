import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Table } from 'react-bootstrap'

function ContactDetails(props) {
    const { id } = useParams()
    const { contacts, remove, editContactHandler } = props
    const [editMode, setEditMode] = useState(0)
    const contact = contacts.find(contact => contact.id === +id)

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
                <tr>
                    {editMode === contact.id ?
                        <>
                            <td>{contact.id}</td>
                            <td><input name="firstName" value={contact.firstName} onChange={(e) => editContactHandler(e, contact)} /></td>
                            <td><input name="lastName" value={contact.lastName} onChange={(e) => editContactHandler(e, contact)} /></td>
                            <td><input name="phone" value={contact.phone} onChange={(e) => editContactHandler(e, contact)} /></td>
                            <td><input name="email" value={contact.email} onChange={(e) => editContactHandler(e, contact)} /></td>
                            <td><input name="address" value={contact.address} onChange={(e) => editContactHandler(e, contact)} /></td>
                            <td><input name="birthday" value={contact.birthday} onChange={(e) => editContactHandler(e, contact)} /></td>
                            <td><input name="details" value={contact.details} onChange={(e) => editContactHandler(e, contact)} /></td>
                            <td>
                                <Button variant="primary" onClick={() => setEditMode(0)}>Save</Button>
                            </td>
                        </>
                        :
                        <>
                            <td>{contact.id}</td>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.email}</td>
                            <td>{contact.address}</td>
                            <td>{contact.birthday}</td>
                            <td>{contact.details}</td>
                            <td>
                                <Button variant="primary" onClick={() => setEditMode(contact.id)}>edit</Button>
                                <Button variant="danger" onClick={() => remove(contact.id)}>Remove</Button>
                            </td>
                        </>
                    }
                </tr>

            </tbody>
        </Table>

    )
}

export default ContactDetails
