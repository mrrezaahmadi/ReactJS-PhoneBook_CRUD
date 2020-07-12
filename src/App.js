import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class App extends React.Component {
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

  changeHandler = (e) => {
    const { value } = e.target
    this.setState({ search: value })

  }

  render() {
    let filteredContacts = this.state.contacts.filter(contact => contact.firstName.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <div className="container">
        <form className="mb-2">
          <input name='search' value={this.state.search} onChange={this.changeHandler} />
          <button className="btn btn-primary">Search</button>
        </form>
        <table>
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Phone No.</th>
              <th>Email</th>
              <th>Address</th>
              <th>Birthday</th>
              <th>Details</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map(contact => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.phone}</td>
                <td>{contact.Email}</td>
                <td>{contact.address}</td>
                <td>{contact.birthday}</td>
                <td>{contact.details}</td>
                <td>
                  <button>+</button>
                  <button>-</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
