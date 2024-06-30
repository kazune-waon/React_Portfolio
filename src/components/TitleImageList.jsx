import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';


export default function TitleImageList() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  let cols = 3; // Default for large screens
  if (isMediumScreen) {
    cols = 2; // For medium screens
  } else if (isSmallScreen) {
    cols = 1; // For small screens
  }
  

  return (
    <ImageList cols={cols} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span> {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/Image/AndroidApp-min.jpg',
    title: 'Androidアプリケーション',
    author: '',
  },
  {
    img: '/Image/Glasritzen-sendai_about-min.png',
    title: 'Webページリニューアルのためのプロトタイプ',
    author: '',
  },
  {
    img: '/Image/WeatherApp-min.jpg',
    title: '天気予報Webアプリ',
    author: '',
  },
  {
    img: '/Image/album_desktop-min.png',
    title: 'アルバムの紹介ページ',
    author: '',
  },
  {
    img: '/Image/Graduation_System-min.jpg',
    title: '卒業研究',
    // author: '',
  },
 
  
];