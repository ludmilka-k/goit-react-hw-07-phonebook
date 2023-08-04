import { createSlice } from '@reduxjs/toolkit';
import {fetchContactsThunk, addContactThunk, deleteContactThunk} from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name:'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ADD CONTACT
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.concat([action.payload]);
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // DELETE CONTACT
      .addCase(deleteContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(contact => contact.id !== action.payload.id);

        // const deletedContactIndex = state.items.findIndex(
        //   contact => contact.id === action.payload.id
        // );
        // state.items.splice(deletedContactIndex, 1)
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
});

export const contactsReducer = contactsSlice.reducer;



