import React, { useState} from 'react';
import { nanoid } from '@reduxjs/toolkit';
import {useSelector, useDispatch} from 'react-redux';
import {addContact, getContacts} from '../../redux';
import { RiUserFill, RiPhoneFill, RiUserAddFill } from "react-icons/ri";
import {Form, Label, InputContainer, InputForm, ButtonAdd} from './ContactForm.styled'
export const ContactForm = ({onAddContact}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const isExistingContact = contacts.some(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );

  const handleChangeName = event => {
    setName(event.target.value);
  }
  const handleChangeNumber = event => {
    setNumber(event.target.value);
  };
// const handleChange = event => {
//   const { name, value } = event.target;
//
//   switch (name) {
//     case 'name':
//       setName(value);
//       break;
//     case 'number':
//       setNumber(value);
//       break;
//     default:
//       return;
//   }
// };

  const handleSubmit = event => {
    event.preventDefault();
    if (isExistingContact) {
      return alert(`${name} is already in contact`);
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(contact));
    resetForm()
  }

 const resetForm = () => {
    setName('');
   setNumber('');
  };

    return (
      <>
        <Form onSubmit={handleSubmit} >
          <Label >
            <InputContainer>
              <InputForm
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash, and spaces. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={handleChangeName} />
              <RiUserFill style={{  position: 'absolute', top: '50%', left: '8px', transform: 'translateY(-50%)'}}/>
            </InputContainer>
            Name
          </Label>
          <Label >
            <InputContainer>
              <InputForm
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={handleChangeNumber}/>
              <RiPhoneFill style={{  position: 'absolute', top: '50%', left: '8px', transform: 'translateY(-50%)'}}/>
            </InputContainer>
            Number
          </Label>

          <ButtonAdd type="submit" >
            <RiUserAddFill />
            Add contact
          </ButtonAdd>
        </Form>
      </>
    )

}

