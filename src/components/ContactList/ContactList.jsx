import {useDispatch, useSelector} from 'react-redux';
import {deleteContact, getContacts} from '../../redux';
import {getFilter} from '../../redux';
import  { RiUserUnfollowFill } from 'react-icons/ri'
import { iconSize } from '../../constants';
import {List, Item, Delete, ContactName, ContactNumber} from './ContactList.styled'

export const ContactList = () => {
	const contacts = useSelector(getContacts);
	const filter = useSelector(getFilter);
	const dispatch = useDispatch();

	const filteredContacts = contacts.filter(contact =>
	  contact.name.toLowerCase().includes(filter.toLowerCase())
	);
	const onRemoveContact = (contactId) => {
		dispatch(deleteContact(contactId));
	};
	return (
    <List >
      {filteredContacts.map(contact => (
        <Item key={contact.id}>
          <ContactName>
            <b>{contact.name}:</b><ContactNumber>{contact.number}</ContactNumber>
          </ContactName>
          <Delete type="button" onClick={() => onRemoveContact(contact.id)}>
            <RiUserUnfollowFill size={iconSize.sm}/>
          </Delete>
        </Item>
      ))}
    </List>
	)
}

