import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64ca433e700d50e3c7049972.mockapi.io/api';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async ( _, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch(error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk (
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export  const deleteContactThunk = createAsyncThunk (
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response= await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
);
