import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import ContactsContainer from '../ContactsContainer/ContactsContainer'
import CreateContact from '../CreateContact/CreateContact'
import ContactDetails from '../ContactDetails/ContactDetails'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

function PhoneBook() {
  const [contacts, setContacts] = useState([{
    id: 1,
    name: 'Ed Boon',
    phone: 98912123456,
    email: 'noobde@gmail.com',
    address: 'Los Angles, CA',
    details: 'get over here!'
  }, {
    id: 2,
    name: 'Alejandro Gonzales Inarrito',
    phone: 98912123467,
    email: 'AlejandroGInarrito@gmail.com',
    address: 'Mexico city, Mexico',
    details: 'Working on my new title, not the revenant'
  }, {
    id: 3,
    name: 'Jorgen Klopp',
    phone: 98912123467,
    email: 'JorgenKlopp@gmail.com',
    address: 'Liverpool, England',
    details: "I'm coach of Liverpool FC"
  }, {

    id: 4,
    name: 'Hanz Zimmer',
    phone: 98912123467,
    email: 'hansimmer@gmail.com',
    address: 'Berlin, Germany',
    details: "Batman OST is my work"
  }
  ])


  const [search, setSearch] = useState('')

  const filteredContactsHandler = (e) => {
    setSearch(e.target.value)
  }

  const removeHandler = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }


  const createContactHandler = (newContact) => {
    if (newContact.name) {
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


  let filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()) || contact.phone.toString().includes(search))
  return (
    <container>
      <Router>
        <Switch>
          <Route path={`/contact/:id`} >
            <ContactDetails contacts={contacts} remove={removeHandler} editContactHandler={editContactHandler} />
          </Route>
          <Route exact path={'/add'}>
            <CreateContact add={createContactHandler} />
          </Route>
          <Route path={`/`}>
            <ContactsContainer filter={filteredContactsHandler} contacts={filteredContacts} />
          </Route>
        </Switch>
      </Router>
    </container>
  )
}

export default PhoneBook