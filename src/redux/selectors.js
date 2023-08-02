import {createSelector} from '@reduxjs/toolkit';

export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;
export const getIsLoading = state => state.isLoading;
export const getError = state => state.error;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter], (contacts, filter) => {
    if(!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
