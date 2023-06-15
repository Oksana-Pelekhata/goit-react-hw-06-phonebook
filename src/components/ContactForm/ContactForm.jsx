import React from 'react';
import PropTypes from 'prop-types';
import { Section, Title, Form, Label, Input, Button } from "./styled"
import { useState } from 'react';

export const ContactForm = ({addNewContact}) => {

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addNewContact(name, number)
    setName('')
    setNumber('')
  }
  
  const handleChange = ({target: {value, name}})=> {

    if (name === 'name') {
      setName(value);
    }
    else if (name === 'number') {
      setNumber(value);
    }
  };

    return (
        <Section>
            <Title>Phonebook</Title>
                <Form autoComplete="off" onSubmit={handleSubmit}>
                <Label htmlFor="name">Name
            <Input
              onChange={handleChange}
          // value={name}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
                        />
                    </Label>
                    
                    <Label htmlFor="number">Number
            <Input
              onChange={handleChange}
          value={number}
type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
                        />
                </Label>

                    <Button type="submit">Add contact</Button>
                </Form>
        </Section>
    )
}

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};