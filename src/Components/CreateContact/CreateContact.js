import React, { useState } from 'react'
import './CreateContact.scss'
import { BrowserRouter as Router, Link, Redirect, useHistory } from 'react-router-dom'
import { faChevronLeft, faCheck, faBroom } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import { addContact } from '../../redux/contacts/contacts.actions'


function CreateContact({ addContact }) {

    const history = useHistory()
    const [contact, setContact] = useState({
        id: '',
        name: '',
        phone: '',
        email: '',
        address: '',
        details: ''
    })

    const createContactHandler = (newContact) => {
        if (newContact.name) {
            addContact(newContact)
        }
    }

    const changeHandler = (e) => {
        let { target: { name, value } } = e
        setContact({ ...contact, [name]: value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        createContactHandler({ ...contact });
        history.push('/')
    }

    const clearButtonHandler = () => {
        setContact({ id: '', name: '', phone: '', email: '', address: '', details: '' })
    }

    const { id, name, phone, email, address, details } = contact
    return (
        <div class="CreateContact">
            <div className="CreateContact-navbar">
                <div className="navbar-btn">
                    <Link to="/">
                        <button><FontAwesomeIcon icon={faChevronLeft} /></button>
                    </Link>
                </div>
                <div className="navbar-title">Add Contact</div>
                <div></div>
            </div>
            <div className="CreateContact-header">
                <button className="btn clear-btn" onClick={clearButtonHandler}><FontAwesomeIcon icon={faBroom} /></button>
                <button className="btn add-btn" type="submit" onClick={submitHandler}><FontAwesomeIcon icon={faCheck} /></button>
            </div>
            <div className="CreateContact-form">
                <div className="form-inputs">
                    <input type="number" value={id} onChange={changeHandler} name="id" placeholder="ID" />
                    <input type="text" value={name} onChange={changeHandler} name="name" placeholder="Name" />
                    <input type="email" value={email} onChange={changeHandler} name="email" placeholder="Email" />
                    <input type="tel" value={phone} onChange={changeHandler} name="phone" placeholder="Phone No." />
                    <input type="text" value={address} onChange={changeHandler} name="address" placeholder="Address ..." />
                    <input type="text" value={details} onChange={changeHandler} name="details" placeholder="details" />
                </div>
            </div>
        </div>
    )
}



export default connect(null, { addContact })(CreateContact)