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
            <img src="https://via.placeholder.com/150" style={{ width: '100%' }}/>
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item>
            <html>大学では広く情報分野をまなび、ネットワークや情報倫理、プログラミングなどを学ぶ。
            在学中に参加したスマホアプリのコンテストではJavaを使用し、
            卒業研究では主にArduinoとPythonを用いたシステム作成を行った。<br/><br/></html>
            昔からクリエイティブなことが好きで多くの人が目にするであろうWebの業界で仕事がしたい！
            という思いから、現在はWeb系の会社に属している。
            <br/><br/>
            今後はより広いエンジニアスキルを身に着けながらUXデザインの学習も行いたい。
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}
