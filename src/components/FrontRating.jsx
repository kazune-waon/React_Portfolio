import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function FrontRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >

<Typography variant="h3" gutterBottom>フロントエンド</Typography>
      
      <Typography component="legend">HTML/CSS</Typography>
      <Rating name="read-only" value={2} readOnly />
      <Typography component="legend">JavaScript</Typography>
      <Rating name="read-only" value={1} readOnly />
      <Typography component="legend">React</Typography>
      <Rating name="read-only" value={1} readOnly />
     
    </Box>
  );
}
