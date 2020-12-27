import React from 'react';

function ContactList(props) {
    return (
        <ol className='contact-list'>
            {
                props.contacts.map((contact) => (
                    <li key={contact.id}>
                        <div
                            className='contact-avatar'
                            style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}>
                        </div>
                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <button className='contact-remove' onClick={() => props.onDeleteContact(contact)}>
                            Remove
                    </button>
                    </li>
                ))
            }
        </ol>
    )
}

export default ContactList;