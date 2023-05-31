import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../api/fetchDogs";

const dataSlice = createSlice({
    name: 'data',
    initialState: { rows: [], status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchData.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchData.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.rows = action.payload;
        })
        .addCase(fetchData.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });

  export default dataSlice;
