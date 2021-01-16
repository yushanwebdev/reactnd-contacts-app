import React, { Component, createContext } from 'react';

import ContactList from './ContactList';
import * as ContactsAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';

class App extends Component {
  state = {
    contacts: [],
    screen: 'list'
  }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => c.id !== contact.id)
    }))

    ContactsAPI.remove(contact);
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
        {
          this.state.screen === 'list' && <ContactList contacts={this.state.contacts} onDeleteContact={this.removeContact} />
        }
        {
          this.state.screen === 'create' && <CreateContact />
        }        
      </div>
    );
  }
}

export default App;
