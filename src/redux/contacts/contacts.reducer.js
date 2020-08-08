import types from './contacts.types'
import contactTypes from './contacts.types'

const initialState = {
    contacts: [{
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
    }],
    search: ''
}

const contactsReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case types.ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, payload]
            }
        case types.DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== payload)
            }
        case types.UPDATE_CONTACT:
            return {
                ...state,
                contacts: payload
            }
        case types.SET_SEARCH:
            return {
                ...state,
                search: payload
            }
        default:
            return state
    }

}

export default contactsReducer