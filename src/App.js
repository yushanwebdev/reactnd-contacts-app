import React, { Component } from 'react';

import ContactList from './ContactList';
import * as ContactsAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    contacts: []
  }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => c.id !== contact.id)
    }))

    ContactsAPI.remove(contact);
  }

  createContact = (contact) => {
    ContactsAPI.create(contact)
      .then((contact) => {
        this.setState((currentState) => ({
          contacts: currentState.contacts.concat([contact])
        }))
      })
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
        <Route
          exact
          path='/'
          render={() => (
            <ContactList
              contacts={this.state.contacts}
              onDeleteContact={this.removeContact}
            />
          )}
        />
        <Route 
          path='/create'
          render={({ history }) => (
            <CreateContact 
              onCreateContact={(contact) => {
                this.createContact(contact);
                history.push('/')
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
