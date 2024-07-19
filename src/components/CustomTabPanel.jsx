import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TitleImageList from './TitleImageList';
import BasicRating from './BackRating';
import NoOpposite from './NoOpposite';
import BasicGrid from './BasicGrid';
import SkillGrid from './SkillGrid';
import { Container } from '@mui/material';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' , mt: -2, pt:0}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width:'100%' }}>
        <Tabs value={value} 
        onChange={handleChange} 
        aria-label="basic tabs example"
        variant="fullWidth"
        >
          <Tab label="HOME" {...a11yProps(0)} />
          <Tab label="PROJECTS" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
      <Container maxwidth="sm">
      <h1>KAZUNE FUJIWARA</h1>
      <h2>ABOUT ME</h2>
      <BasicGrid />
      <h2>SKILL</h2>
      <SkillGrid />
      <h2>EXPERIENCE</h2>
      <NoOpposite />
      </Container>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
      <TitleImageList />
      </CustomTabPanel>

     
    </Box>
  );
}
