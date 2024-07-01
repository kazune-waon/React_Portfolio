import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  let imgcols = 5; // Default for large screens
  let introcols = 7; 
  if (isMediumScreen) {
    imgcols = 6;
    introcols = 6; // For medium screens
  } else if (isSmallScreen) {
    imgcols = 12;
    introcols = 12; // For small screens
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={imgcols}>
          <Item>
            <img src="/Image/plofile-min.jpeg" style={{ width: '80%' }}/>
          </Item>
        </Grid>
        <Grid item xs={introcols}>
          <Item>
            <html>社会人歴1年目のひよっこエンジニアです。<br/>
            大学では広く情報分野をまなび、スマホアプリのコンテストへの参加や
            、卒業研究で絵本のシステムを制作。
           
           <br/><br/></html>
            昔からクリエイティブなことが好きで多くの人が目にするWebの業界で仕事がしたい！
            という思いから、現在はWeb系の会社に属しています。
            <br/><br/>
            今後はより広いエンジニアスキルを身に着けながらUXデザインの学習も行いたいと考えています！
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}
