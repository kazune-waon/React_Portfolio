import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BackRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >

      <html><h3>バックエンド</h3></html>
      
     
      
      <Typography component="legend">Java</Typography>
      <Rating name="read-only" value={2} readOnly />
      <Typography component="legend">Python</Typography>
      <Rating name="read-only" value={2} readOnly />
      <html><br/><br/><br/></html>
    </Box>
  );
}
