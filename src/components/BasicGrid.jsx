import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Item>
            <img src="../../public/Image/plofile.jpeg" style={{ width: '80%' }}/>
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item>
            <html>社会人歴1年目のひよっこエンジニアです。<br/>
            大学では広く情報分野をまなび、ネットワークや情報倫理、プログラミングなどを学びました。
            在学中はスマホアプリのコンテストに参加したり、卒業研究で絵本のシステムをつくりました。
           
           <br/><br/></html>
            昔からクリエイティブなことが好きで多くの人が目にするであろうWebの業界で仕事がしたい！
            という思いから、現在はWeb系の会社に属しています。
            <br/><br/>
            今後はより広いエンジニアスキルを身に着けながらUXデザインの学習も行いたいと考えています！
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}
