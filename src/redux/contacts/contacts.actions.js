import types from './contacts.types'

const addContact = (newContact) => {
    return {
        payload: newContact,
        type: types.ADD_CONTACT
    }
}

const deleteContact = (contactId) => {
    return {
        payload: contactId,
        type: types.DELETE_CONTACT
    }
}

const updateContact = (contact) => {
    return {
        payload: contact,
        type: types.UPDATE_CONTACT
    }
}

const setSearch = (inputValue) => {
    return {
        payload: inputValue,
        type: types.SET_SEARCH
    }
}

export { addContact, deleteContact, updateContact, setSearch }