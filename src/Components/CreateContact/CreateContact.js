import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

function CreateContact(props) {
    const { add } = props
    const [contact, setContact] = useState({
        id: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        birthday: '',
        details: ''
    })

    const changeHandler = (e) => {
        let { target: { name, value } } = e
        setContact({ ...contact, [name]: value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        add({ ...contact })
    }

    const clearButtonHandler = () => {
        setContact({ id: '', firstName: '', lastName: '', phone: '', email: '', address: '', birthday: '', details: '' })
    }

    const { id, firstName, lastName, phone, email, address, birthday, details } = contact
    return (

        <Form onSubmit={submitHandler}>

            <Form.Group>
                <Row>
                    <Col>
                        <Form.Control type="number" value={id} onChange={changeHandler} name="id" placeholder="ID" />
                    </Col>
                    <Col>
                        <Form.Control type="text" value={firstName} onChange={changeHandler} name="firstName" placeholder="First Name" />
                    </Col>
                    <Col>
                        <Form.Control type="text" value={lastName} onChange={changeHandler} name="lastName" placeholder="Last Name" />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group>
                <Row>
                    <Col><Form.Control type="email" value={email} onChange={changeHandler} name="email" placeholder="Email" /></Col>
                    <Col><Form.Control type="tel" value={phone} onChange={changeHandler} name="phone" placeholder="Phone No." /></Col>
                    <Col><Form.Control type="text" value={address} onChange={changeHandler} name="address" placeholder="Address ..." /></Col>
                    <Col><Form.Control type="date" value={birthday} onChange={changeHandler} /></Col>
                </Row>
            </Form.Group>
            <Form.Group>
                <Row>
                    <Col><Form.Control type="text" value={details} onChange={changeHandler} name="details" placeholder="details" /></Col>
                </Row>
            </Form.Group>
            <Row>
                <Col className="offset-5">
                    <Button variant="warning" onClick={clearButtonHandler}>Clear</Button>
                    <Button variant="primary" type="submit" onClick={submitHandler}>Add</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default CreateContact