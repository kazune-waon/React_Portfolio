import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FrontRating from './FrontRating';
import BackRating from './BackRating';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
  background:"none"
}));

export default function BasicGrid() {
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <FrontRating/>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
           <BackRating />
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}
