import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../redux/store.config'

import ContactsContainer from '../ContactsContainer/ContactsContainer'
import CreateContact from '../CreateContact/CreateContact'
import ContactDetails from '../ContactDetails/ContactDetails'

function PhoneBook() {
  return (
    <Provider store={store}>
      <container>
        <Router>
          <Switch>
            <Route path={`/contact/:id`} >
              <ContactDetails />
            </Route>
            <Route exact path={'/add'}>
              <CreateContact />
            </Route>
            <Route path={`/`}>
              <ContactsContainer />
            </Route>
          </Switch>
        </Router>
      </container>
    </Provider>
  )
}

export default PhoneBook
