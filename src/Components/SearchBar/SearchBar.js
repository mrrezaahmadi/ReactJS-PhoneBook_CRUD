import React, { Component } from 'react'
import { Form, InputGroup, Button, Row, Col } from 'react-bootstrap'

export default class SearchBar extends Component {
    render() {
        return (
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <InputGroup>
                                <Form.Control onChange={e => this.props.filter(e)} placeholder="Search the contact ... " />
                                <Button variant='primary'>Search</Button>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        )
    }
}