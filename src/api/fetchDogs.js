import { createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  try {
    const response = await api.get();
    return response.data;
  } catch (error) {
    console.log('Error fetching data:', error);
    throw error;
  }
});

