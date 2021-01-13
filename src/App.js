import React, { Component } from 'react';

import ContactList from './ContactList';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  state = {
    contacts: []
  }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => c.id !== contact.id)
    }))
  }

  componentDidMount() {
    ContactsAPI.getAll()
      .then((contacts) => {
        this.setState(prevState => ({
          contacts
        }))
      })
  }

  render() {
    return (
      <div>
        <ContactList contacts={this.state.contacts} onDeleteContact={this.removeContact} />
      </div>
    );
  }
}

export default App;
