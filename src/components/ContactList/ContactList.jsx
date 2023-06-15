import PropTypes from 'prop-types';

import {Section, ContactItem, ContactButton, ContactName } from './styled'
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector, filterSelector } from 'redux/selectors';
import { deleteContactAction } from 'redux/actions';


export const ContactList = () => {
const contacts = useSelector(contactsSelector)
  const dispatch = useDispatch();

  const {filter} = useSelector(filterSelector)
  
  console.log('contacts', contacts)
  console.log('filter', filter)

    const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    };
  
  const getFilteredContacts = filterContacts()
  console.log('getfilteredContacts', getFilteredContacts)

  const handleDelete = (id) => {
    dispatch(deleteContactAction(id))
  }
    return (
        <Section>
        
            <ul> {
                getFilteredContacts.map(({ id, name, number }) => {
                    return (
                        <ContactItem key={id}>
              <ContactName>
                {name}: {number}
              </ContactName>
              <ContactButton type="button" onClick={()=> handleDelete(id)}>
                Delete
              </ContactButton>
            </ContactItem>
                        );
                })
            }
        </ul>
        </Section>
       )
    
}

