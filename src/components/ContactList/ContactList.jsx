import {useDispatch, useSelector} from 'react-redux';
import { deleteContactThunk, selectError, selectFilteredContacts, selectIsLoading } from '../../redux';
import  { RiUserUnfollowFill } from 'react-icons/ri'
import { iconSize } from '../../constants';
import {List, Item, Delete, ContactName, ContactNumber} from './ContactList.styled';


export const ContactList = () => {
	const dispatch = useDispatch();

	const contacts = useSelector(selectFilteredContacts);
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);

	const onRemoveContact = (contactId )=> {
		dispatch(deleteContactThunk(contactId));
	}

	return (
		<>
			{!contacts?.length && !error && !isLoading && (
				<div>Contacts not found</div>
			)}
			{!error && !isLoading && contacts?.length > 0 && (
			<List>
				{contacts.map(contact => {
					return (
						<Item key={contact.id}>
							<ContactName>
								<b>{contact.name}:</b><ContactNumber>{contact.number}</ContactNumber>
							</ContactName>
							<Delete type='button' onClick={() => onRemoveContact(contact.id)}>
								<RiUserUnfollowFill size={iconSize.sm} />
							</Delete>
						</Item>
					);
				})}
			</List>
			)}
		</>
	);
}

