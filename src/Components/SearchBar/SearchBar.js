import React from 'react'
import { Form, InputGroup, Button, Row, Col } from 'react-bootstrap'



function SearchBar(props) {
    return (
        <Form>
            <Row>
                <Col>
                    <Form.Group>
                        <InputGroup>
                            <Form.Control onChange={e => props.filter(e)} placeholder="Search the contact ... " />
                            <Button variant='primary'>Search</Button>
                        </InputGroup>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    )
}

export default SearchBar