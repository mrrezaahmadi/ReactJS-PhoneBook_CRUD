import { combineReducers } from 'redux'

import contactsReducer from './contacts/contacts.reducer'

export default combineReducers({
    contacts: contactsReducer
})