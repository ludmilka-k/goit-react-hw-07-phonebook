import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import {Section} from './Section'
import { getIsLoading, getError, fetchContactsThunk } from '../redux';

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch;

  useEffect(() => {
    dispatch(fetchContactsThunk())
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
        {isLoading && !error && <p>Loading...</p>}
      </Section>
    </>
  )
}


