
import { createSlice } from '@reduxjs/toolkit';

const theme  = 'darkMode';

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem(theme);
  return savedTheme ? JSON.parse(savedTheme) : false;
};

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: getInitialTheme(),
  reducers: {
    toggleDarkMode: (state) => {
      const newTheme = !state;
      localStorage.setItem(theme, JSON.stringify(newTheme));
      return newTheme;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;