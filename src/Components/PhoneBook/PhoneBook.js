import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import SearchBar from '../SearchBar/SearchBar'
import ContactsContainer from '../ContactsContainer/ContactsContainer'


export default class PhoneBook extends Component {
  state = {
    contacts: [{
      id: 1,
      firstName: 'Mohammad Reza',
      lastName: 'Ahmadi',
      phone: 98912123456,
      Email: 'somename@gmail.com',
      address: 'somewhere',
      birthday: '01/01/1111',
      details: 'something to fill the blank'
    }, {
      id: 2,
      firstName: 'Alejandro',
      lastName: 'Gonzales',
      phone: 98912123467,
      Email: 'somename@gmail.com',
      address: 'somewhere',
      birthday: '01/01/1111',
      details: 'something to fill the blank'
    }, {
      id: 3,
      firstName: 'Jorgen',
      lastName: 'Klopp',
      phone: 98912123467,
      Email: 'somename@gmail.com',
      address: 'somewhere',
      birthday: '01/01/1111',
      details: 'something to fill the blank'
    }], 
    search: ''
  }

  filteredContactsHandler = (e) => {
    this.setState({ search: e.target.value })
  }

  removeHandler = (id) => {
    this.setState({ contacts: this.state.contacts.filter(contact => contact.id !== id)})
  }


  render() {
    let filteredContacts = this.state.contacts.filter(contact => contact.firstName.toLowerCase().includes(this.state.search.toLowerCase()) || contact.phone.toString().includes(this.state.search))
    return (
      <Container fluid>
        <SearchBar filter={this.filteredContactsHandler} />
        <ContactsContainer contacts={filteredContacts} remove={this.removeHandler}/>
      </Container>
    )
  }
}
