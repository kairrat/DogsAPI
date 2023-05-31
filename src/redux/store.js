import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from '../redux/slices/DarkModeSlice';
<<<<<<< HEAD
import dataSlice from "./slices/fetchDogsSlice";
=======
>>>>>>> 9e54bb7b262fcd7685f3531e4dcddf0eb10b8422


export const store = configureStore({
    reducer: {
      
        darkMode: darkModeReducer,
<<<<<<< HEAD
        [dataSlice.name] : dataSlice.reducer,

=======
>>>>>>> 9e54bb7b262fcd7685f3531e4dcddf0eb10b8422

    }
});