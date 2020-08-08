import React, { useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faCommentDots, faPhoneAlt, faVideo, faEnvelope, faChevronLeft, faCheck } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

import { deleteContact, updateContact } from '../../redux/contacts/contacts.actions'
import './ContactDetails.scss'

function ContactDetails({ contacts, deleteContact, updateContact }) {

    const history = useHistory()
    const { id } = useParams()
    const [editMode, setEditMode] = useState(0)
    const contact = contacts.find(contact => contact.id === +id)

    const removeHanlder = (id) => {
        deleteContact(id)
        history.push('/')
    }

    const editContactHandler = (event, prevContact) => {
        const copyContacts = [...contacts]
        const { target: { name, value } } = event
        const editedContact = { ...prevContact, [name]: value }
        const nextContact = copyContacts.find(contact => contact.id === prevContact.id)
        Object.keys(nextContact).forEach(contactKey => nextContact[`${contactKey}`] = editedContact[`${contactKey}`])

        updateContact(copyContacts)
    }

    return (
        <div className="ContactDetails">
            <div className="contactDetails-navbar">

                <Link to="/">
                    <button className="btn btn-nav btn-back">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                </Link>
                {editMode === contact.id ? <tr>
                    <button className="btn btn-nav btn-save" onClick={() => setEditMode(0)}><FontAwesomeIcon icon={faCheck} /></button>
                </tr> :
                    <tr>
                        <button className="btn btn-nav btn-edit" onClick={() => setEditMode(contact.id)}><FontAwesomeIcon icon={faPen} /></button>
                    </tr>
                }
            </div>
            <div className="contactDetails-info">
                <div className="contactDetails-info--image">
                    <img src={'https://api.adorable.io/avatars/256/Ali@adorable.png' + contact.id} alt='profile' />
                </div>
                <div className="contactDetails-info--title">
                    {editMode === contact.id ? <input className="input-info" name="name" value={contact.name} onChange={(e) => editContactHandler(e, contact)} /> :
                        `${contact.name}`
                    }
                </div>

                <div className="contactDetails-info--subtitle">
                    {contact.phone}
                </div>
            </div>
            <div className="table-header">
                <table>
                    <thead className="thead-dark">
                        <tr>
                            <th><button className="btn btn-header btn-message"><FontAwesomeIcon icon={faCommentDots} /></button></th>
                            <th><button className="btn btn-header btn-phone"><FontAwesomeIcon icon={faPhoneAlt} /></button></th>
                            <th><button className="btn btn-header btn-video"><FontAwesomeIcon icon={faVideo} /></button></th>
                            <th><button className="btn btn-header btn-mail"><FontAwesomeIcon icon={faEnvelope} /></button></th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="table-body">
                <table>
                    <tbody>
                        {editMode === contact.id ?
                            <>
                                <tr>
                                    <div className='tr-info'>
                                        <div className="tr-title">Mobile</div>
                                        <div className="tr-subtitle__edit">
                                            <input name="phone" value={contact.phone} onChange={(e) => editContactHandler(e, contact)} />
                                        </div>
                                    </div>
                                    <div className="tr-icon"></div>
                                </tr>
                                <tr>
                                    <div className="tr-info">
                                        <div className="tr-title">Email</div>
                                        <div className="tr-subtitle__edit"><input name="email" value={contact.email} onChange={(e) => editContactHandler(e, contact)} />
                                        </div>
                                    </div>
                                    <div className="tr-icon"></div>
                                </tr>
                                <tr>
                                    <div className="tr-info">
                                        <div className="tr-title">Address</div>
                                        <div className="tr-subtitle__edit"><input name="address" value={contact.address} onChange={(e) => editContactHandler(e, contact)} />
                                        </div>
                                    </div>
                                    <div className="tr-icon"></div>
                                </tr>
                                <tr>
                                    <div className='tr-info'>
                                        <div className="tr-title">Description</div>
                                        <div className="tr-subtitle__edit">
                                            <input name="details" value={contact.details} onChange={(e) => editContactHandler(e, contact)} />
                                        </div>
                                    </div>
                                    <div className="tr-icon"></div>
                                </tr>
                                <tr>
                                    <button className="btn btn-remove" onClick={() => removeHanlder(contact.id)}>Remove</button>
                                </tr>

                            </>
                            :
                            <>
                                <tr>
                                    <div className="tr-info">
                                        <div className="tr-title">Mobile</div>
                                        <div className="tr-subtitle">{contact.phone}</div>
                                    </div>
                                    <div className="tr-icon"></div>

                                </tr>
                                <tr>
                                    <div className="tr-info">
                                        <div className="tr-title">Email</div>
                                        <div className="tr-subtitle">{contact.email}</div>
                                    </div>
                                    <div className="tr-icon"></div>

                                </tr>
                                <tr>
                                    <div className="tr-info">
                                        <div className="tr-title">Address</div>
                                        <div className="tr-subtitle">{contact.address}</div>
                                    </div>
                                    <div className="tr-icon"></div>

                                </tr>
                                <tr>
                                    <div className="tr-info">
                                        <div className="tr-title">Description</div>
                                        <div className="tr-subtitle">{contact.details}</div>
                                    </div>
                                    <div className="tr-icon"></div>

                                </tr>

                            </>
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts.contacts
    }
}

export default connect(mapStateToProps, { deleteContact, updateContact })(ContactDetails)