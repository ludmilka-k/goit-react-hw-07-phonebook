import {createSelector} from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.item;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter], (contacts, filter) => {
    if(!filter) {
        console.log(contacts);
      return contacts;
    }
    return contacts.filter(({ name}) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
