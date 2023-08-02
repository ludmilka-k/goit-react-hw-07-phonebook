import {createSlice, nanoid} from '@reduxjs/toolkit';
import initialContactsData from '../contacts.json';

const contactsSlice = createSlice({
  name:'contacts',
  initialState: initialContactsData,
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare (newContactData) {
       return {
          payload: {id:nanoid(), ...newContactData}
        }
      }
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    }
  },
});

export const {addContact, deleteContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
