import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';


export default function TitleImageList() {

  

  return (
    <ImageList >
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
    img: '/Image/AndroidApp.jpg',
    title: 'Androidアプリケーション',
    author: '',
  },
  {
    img: '/Image/Glasritzen-sendai_about.png',
    title: 'Webページリニューアルのためのプロトタイプ',
    author: '',
  },
  {
    img: '/Image/WeatherApp.jpg',
    title: '天気予報Webアプリ',
    author: '',
  },
  {
    img: '/Image/album_desktop.png',
    title: 'アルバムの紹介ページ',
    author: '',
  },
  {
    img: '/Image/Graduation_System.jpg',
    title: '卒業研究',
    // author: '',
  },
 
  
];