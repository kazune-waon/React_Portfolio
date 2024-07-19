import { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


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
import { Container } from '@mui/material';



function App() {
  const[switchChecked, setSwitchChecked] = useState(false);

  const toggleSwitch = () => {
    setSwitchChecked(!switchChecked);
  };
 
  return (

    <div className={switchChecked ? "darkModeMain" : "lightModeMain"}>
     
        <div className='topBarContainer'>
          <FormControlLabel
          control={<Switch checked={switchChecked} onChange={toggleSwitch} />}
          label={switchChecked ? <Brightness2Icon /> : <WbSunnyIcon />} />
        </div>
        <div className='mainContainer'> 
         
            <CustomTabPanel />
         
        </div>
      
    </div>
  //  <>
  //  <CustomTabPanel />
  //  </>
  )
}

export default App
