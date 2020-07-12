import React, { Component } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import TableMaker from '../TableMaker/TableMaker'

export default class SearchBar extends Component {
    state = {
        search: ''
    }

    changeHandler = (e) => {
        const { value } = e.target
        this.setState({ search: value })

    }
    render() {
        const { contacts } = this.props
        const { search } = this.state
        let filteredContacts = contacts.filter(contact => contact.firstName.toLowerCase().includes(search.toLowerCase()) || contact.phone.toString().includes(search))
        return (
            <Form>
                <InputGroup>
                    <input name='search' value={this.state.search} onChange={this.changeHandler} />
                    <button className="btn btn-primary">Search</button>
                </InputGroup>
                <TableMaker contacts={filteredContacts} />
            </Form>
        )
    }
}
