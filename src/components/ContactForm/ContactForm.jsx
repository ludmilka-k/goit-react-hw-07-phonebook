import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContactThunk, selectContacts } from '../../redux';
import { RiUserFill, RiPhoneFill, RiUserAddFill } from 'react-icons/ri';
import { Form, Label, InputContainer, InputForm, ButtonAdd } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChangeName = event => {
    setName(event.target.value);
  };
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
    const isExistingContact = contacts.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    if (isExistingContact) {
      return alert(`${name} is already in contact`);
    }

    dispatch(addContactThunk({ name, number }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          <InputContainer>
            <InputForm
              type='text'
              name='name'
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash, and spaces. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              placeholder='Enter contact name'
              onChange={handleChangeName} />
            <RiUserFill style={{ position: 'absolute', top: '50%', left: '8px', transform: 'translateY(-50%)' }} />
          </InputContainer>
          Name
        </Label>
        <Label>
          <InputContainer>
            <InputForm
              type='tel'
              name='number'
              pattern='\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}'
              title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
              required
              value={number}
              placeholder='Enter phone number'
              onChange={handleChangeNumber} />
            <RiPhoneFill style={{ position: 'absolute', top: '50%', left: '8px', transform: 'translateY(-50%)' }} />
          </InputContainer>
          Number
        </Label>

        <ButtonAdd type='submit'>
          <RiUserAddFill />
          Add contact
        </ButtonAdd>
      </Form>
    </>
  );

};

