import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import SearchBar from '../SearchBar/SearchBar'
import ContactsContainer from '../ContactsContainer/ContactsContainer'
import CreateContact from '../CreateContact/CreateContact'

function PhoneBook() {
  const [contacts, setContacts] = useState([{
    id: 1,
    firstName: 'Mohammad Reza',
    lastName: 'Ahmadi',
    phone: 98912123456,
    email: 'somename@gmail.com',
    address: 'somewhere',
    birthday: '01/01/1111',
    details: 'something to fill the blank'
  }, {
    id: 2,
    firstName: 'Alejandro',
    lastName: 'Gonzales',
    phone: 98912123467,
    email: 'somename@gmail.com',
    address: 'somewhere',
    birthday: '01/01/1111',
    details: 'something to fill the blank'
  }, {
    id: 3,
    firstName: 'Jorgen',
    lastName: 'Klopp',
    phone: 98912123467,
    email: 'somename@gmail.com',
    address: 'somewhere',
    birthday: '01/01/1111',
    details: 'something to fill the blank'
  }])


  const [search, setSearch] = useState('')

  const filteredContactsHandler = (e) => {
    setSearch(e.target.value)
  }

  const removeHandler = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  const createContactHandler = (newContact) => {
    if (newContact.firstName) {
      setContacts([...contacts, newContact])
    }
  }
  let filteredContacts = contacts.filter(contact => contact.firstName.toLowerCase().includes(search.toLowerCase()) || contact.phone.toString().includes(search))
  return (
    <Container fluid={"md"} className="my-4">
      <SearchBar filter={filteredContactsHandler} />
      <CreateContact add={createContactHandler} />
      <ContactsContainer contacts={filteredContacts} remove={removeHandler} />
    </Container>
  )
}

export default PhoneBook