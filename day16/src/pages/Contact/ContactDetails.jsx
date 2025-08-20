import React from 'react'
import { contacts } from './ContactData'
import { useParams,useNavigate } from 'react-router-dom';

function ContactDetails() {
    const {contactId} = useParams();
    const contact = contacts.find(contact => contact.id === parseInt(contactId));
    const navigate = useNavigate();
    const handleOkClick = () => {
        navigate("/contact");
    };
    if(!contact) {
        return <h2>Contact not found</h2>;
    }
  return (
    <div>
      <h1>
        <p>ID: {contact.id}</p>
      </h1>
      <h1>
        <p>Name: {contact.name}</p>
      </h1>
      <h1>
        <p>Email: {contact.email}</p>
      </h1>
      <button onClick={handleOkClick}>Ok</button>
    </div>
  );
}

export default ContactDetails;