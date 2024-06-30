import { useState } from 'react'

import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicRating from './components/BackRating'
import TitleImageList from './components/TitleImageList'
import BasicTimeline from './components/BasicTimeline'
import NoOpposite from './components/NoOpposite'
import CustomTabPanel from './components/CustomTabPanel'



function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    
    <>
    {/* <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider> */}
    <CustomTabPanel />
     
    </>
  )
}

export default App
