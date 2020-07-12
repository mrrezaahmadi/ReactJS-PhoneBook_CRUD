import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import SearchBar from '../SearchBar/SearchBar'

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
    }]
  }

  render() {
    return (
      <div>
        <Container fluid>
          <SearchBar contacts={this.state.contacts}/>
        </Container>
      </div>
    )
  }
}
