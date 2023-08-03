import {createSlice, nanoid} from '@reduxjs/toolkit';
import {fetchContactsThunk, addContactThunk, deleteContactThunk} from './operations';
import initialContactsData from '../contacts.json';

const initialState = {
  contacts: initialContactsData, //[]
  isLoading: false,
  error: null,
}

const contactsSlice = createSlice({
  name:'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContactsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ADD CONTACT
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.push(action.payload);
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // DELETE CONTACT
      .addCase(deleteContactThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);

        // const deletedContactIndex = state.contacts.findIndex(
        //   contact => contact.id === action.payload
        // );
        // state.contacts.splice(deletedContactIndex, 1)
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
});

export const {addContactThunk, deleteContactThunk} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
