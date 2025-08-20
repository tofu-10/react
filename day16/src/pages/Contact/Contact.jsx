import React from 'react'
import { Link } from 'react-router-dom'
import { contacts } from './ContactData';
export default function Contact() {
  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            ID:<Link to={`${contact.id}`}>{contact.id}</Link>
          </li>
        )
        )
        }
      </ul>
    </div>
  )
}
