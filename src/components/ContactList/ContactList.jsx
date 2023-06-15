import PropTypes from 'prop-types';

import {Section, ContactItem, ContactButton, ContactName } from './styled'


export const ContactList = ({ options, handleDelete }) => {
    return (
        <Section>
        
            <ul> {
                options.map(({ id, name, number }) => {
                    return (
                        <ContactItem key={id}>
              <ContactName>
                {name}: {number}
              </ContactName>
              <ContactButton type="button" onClick={() => handleDelete(id)}>
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

ContactList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape).isRequired,
  handleDelete: PropTypes.func.isRequired,
};