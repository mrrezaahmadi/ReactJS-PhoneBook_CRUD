import React, { useState } from 'react'
import { Button } from 'react-bootstrap'



function ContactCard(props) {
    const { contact, remove, editContactHandler } = props
    const [editMode, setEditMode] = useState(0)

    return (
        <tr>
            {editMode === contact.id ? <>
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
                : <>
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
    )
}

export default ContactCard
