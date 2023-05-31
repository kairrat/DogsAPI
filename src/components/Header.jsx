import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Grid, Typography, Switch } from '@mui/material';
import { toggleDarkMode } from '../redux/slices/DarkModeSlice';

const Header = () => {
  const isDarkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
<<<<<<< HEAD
    <AppBar sx={{ height: '80px', backgroundColor: 'purple', position : 'static' }}>
      <Grid container justifyContent="space-between" alignItems="center" sx={{ height: '100%'}} >
=======
    <AppBar>
      <Grid container justifyContent="space-between" alignItems="center">
>>>>>>> 9e54bb7b262fcd7685f3531e4dcddf0eb10b8422
        <Grid item>
          <Typography>
            React-Dog-Test-Project
          </Typography>
        </Grid>

        <Grid item>
          <Typography>
            Dark Mode
            <Switch
              color="default"
              checked={isDarkMode}
              onChange={handleDarkModeToggle}
            />
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;




