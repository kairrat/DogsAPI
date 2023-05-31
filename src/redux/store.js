import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from '../redux/slices/DarkModeSlice';
import dataSlice from "./slices/fetchDogsSlice";


export const store = configureStore({
    reducer: {
      
        darkMode: darkModeReducer,
        [dataSlice.name] : dataSlice.reducer,
    }
});