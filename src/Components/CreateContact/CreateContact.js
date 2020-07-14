import React, { Component } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

export default class CreateContact extends Component {
    state = {
        id: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        birthday: '',
        details: ''
    }

    changeHandler = (e) => {
        const { target: { name, value } } = e
        this.setState({ [name]: value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        const { id, firstName, lastName, phone, email, address, birthday, details } = this.state
        let newContact = { id, firstName, lastName, phone, email, address, birthday, details }
        this.props.add(newContact)
    }

    clearButtonHandler = () => {
        this.setState({ id: '', firstName: '', lastName: '', phone: '', email: '', address: '', birthday: '', details: '' })
    }

    render() {
        const { id, firstName, lastName, phone, email, address, birthday, details } = this.state
        return (
            <Form onSubmit={this.submitHandler}>

                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control type="number" value={id} onChange={this.changeHandler} name="id" placeholder="ID" />
                        </Col>
                        <Col>
                            <Form.Control type="text" value={firstName} onChange={this.changeHandler} name="firstName" placeholder="First Name" />
                        </Col>
                        <Col>
                            <Form.Control type="text" value={lastName} onChange={this.changeHandler} name="lastName" placeholder="Last Name" />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col><Form.Control type="email" value={email} onChange={this.changeHandler} name="email" placeholder="Email" /></Col>
                        <Col><Form.Control type="tel" value={phone} onChange={this.changeHandler} name="phone" placeholder="Phone No." /></Col>
                        <Col><Form.Control type="text" value={address} onChange={this.changeHandler} name="address" placeholder="Address ..." /></Col>
                        <Col><Form.Control type="date" value={birthday} onChange={this.changeHandler} /></Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col><Form.Control type="text" value={details} onChange={this.changeHandler} name="details" placeholder="details" /></Col>
                    </Row>
                </Form.Group>
                <Row>
                    <Col className="offset-5">
                        <Button variant="warning" onClick={this.clearButtonHandler}>Clear</Button>
                        <Button variant="primary" type="submit" onClick={this.submitHandler}>Add</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}
