import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import SearchBar from '../SearchBar/SearchBar'
import ContactsContainer from '../ContactsContainer/ContactsContainer'
import CreateContact from '../CreateContact/CreateContact'
import ContactDetails from '../ContactDetails/ContactDetails'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

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

  const editContactHandler = (event, prevContact) => {
    const copyContacts = [...contacts]
    const { target: { name, value } } = event
    const editedContact = { ...prevContact, [name]: value }
    const nextContact = copyContacts.find(contact => contact.id === prevContact.id)
    Object.keys(nextContact).forEach(contactKey => nextContact[`${contactKey}`] = editedContact[`${contactKey}`])

    setContacts(copyContacts)
  }


  let filteredContacts = contacts.filter(contact => contact.firstName.toLowerCase().includes(search.toLowerCase()) || contact.phone.toString().includes(search))
  return (
    <Container fluid={"md"} className="my-4">
      <Router>
        <Switch>
          <Route path={`/contact/:id`} >
            <Link to="/">home</Link>
            <ContactDetails contacts={contacts} remove={removeHandler} editContactHandler={editContactHandler} />
          </Route>
          <Route exact path={'/add'}>
            <nav>
              <ul>
                <li><Link to='/'>Home</Link></li>
              </ul>
            </nav>
            <CreateContact add={createContactHandler} />
          </Route>
          <Route path={`/`}>
            <nav>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/add'>Add</Link></li>
              </ul>
            </nav>
            <SearchBar filter={filteredContactsHandler} />
            <ContactsContainer contacts={filteredContacts} />
          </Route>

        </Switch>
      </Router>
    </Container>
  )
}

export default PhoneBook