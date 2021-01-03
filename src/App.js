import React, { Component } from 'react';

import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "./img/karen.jpg"
      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "./img/richard.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "./img/tyler.jpg"
      }
    ]
  }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => c.id !== contact.id)
    }))
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
