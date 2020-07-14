import React, { Component } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'

export default class SearchBar extends Component {
    render() {
        return (
            <Form>
                <InputGroup>
                    <input onChange={e => this.props.filter(e)} />
                    <Button variant='primary'>Search</Button>
                </InputGroup>
            </Form>
        )
    }
}