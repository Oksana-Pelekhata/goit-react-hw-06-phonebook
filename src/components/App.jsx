
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList/';
import { FilterForm } from './FilterForm';
import { useState } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const App = () => {

//   const [contacts, setContacts] = useLocalStorage('contacts', [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ])
  
//   const [filter, setFilter] = useState('')

//   const addNewContact = (name, number) => {

//     if (contacts.some((contact)=>(contact.name.toLowerCase() === name.toLowerCase()))) {
//       return alert(`${name} already exists in your contacts.`);
//     }

//     if (contacts.some((contact)=>(contact.number === number))) {
//       return alert(`Number ${number} already exists in your contacts.`);
//     }

//     setContacts(prevContacts => [...prevContacts,  {
//       id: nanoid(),
//       name,
//       number,
//     }
//     ])
   
//   };

//   const handleDelete = (id) => {
//     setContacts( (prevContacts)=>prevContacts.filter(prevContact => prevContact.id !== id))

//   };

//  const handleFilterChange = ({target:{value}}) => {
//     setFilter(value);
//   };

//   const getFilteredContacts = () => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

    return (
      <ThemeProvider theme={theme}>
        <ContactForm  />
        <FilterForm
          label="Find contacts by name"
        />
        {/* {contacts.length === 0 ? (
          <p>You don't have contacts yet</p>
        ) : ( */}
          <ContactList
            // options={getFilteredContacts()}
            // handleDelete={handleDelete}
          />
        {/* )} */}
      </ThemeProvider>
    );
  }