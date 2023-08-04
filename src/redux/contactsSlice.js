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
        // state.error = null;
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
        // state.error = null;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.concat([action.payload]);
        // state.items.push(action.payload);
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // DELETE CONTACT
      .addCase(deleteContactThunk.pending, state => {
        state.isLoading = true;
        // state.error = null;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // state.items = state.items.filter(contact => contact.id !== action.payload);

        const deletedContactIndex = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(deletedContactIndex, 1)
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
});

export const contactsReducer = contactsSlice.reducer;





// const sharedActions = type => isAnyOf(
//   fetchContactsThunk[type],
//   addContactThunk[type],
//   deleteContactThunk[type]
// );
//
// const contactsSlice = createSlice({
//   name:'contacts',
//   initialState,
//   extraReducers: builder =>
// // Uncaught Error: addCase cannot be called with two reducers for the same action type
// // Solution: https://github.com/reduxjs/redux-toolkit/issues/429
//     builder
//       .addCase(fetchContactsThunk.fulfilled, (state, action) => {
//         state.contacts = action.payload;
//       })
//       .addCase(addContactThunk.fulfilled, (state, action) => {
//         state.contacts = state.contacts.push(action.payload);
//       })
//       .addCase(deleteContactThunk.fulfilled, (state, action) => {
//         state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
//         //or second way
//         // const deletedContactIndex = state.contacts.findIndex(
//         //   contact => contact.id === action.payload
//         // );
//         // state.contacts.splice(deletedContactIndex, 1)
//       })
//       .addMatcher(sharedActions('pending'), state => {
//         state.isLoading = true;
//       })
//       .addMatcher(sharedActions('rejected'), (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addMatcher(sharedActions('fulfilled'), (state) => {
//         state.isLoading = false;
//         state.error = null;
//       })
// });

