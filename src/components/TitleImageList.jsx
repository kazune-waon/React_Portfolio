import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

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
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://github.com/kazune-waon/React_Portfolio/blob/main/src/Image/AndroidApp.jpg?raw=true',
    title: 'AndroidApp',
    author: '@bkristastucchio',
  },
  {
    img: 'https://github.com/kazune-waon/React_Portfolio/blob/main/src/Image/Glasritzen-sendai_about.png?raw=true',
    title: 'Webpage prototype',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://github.com/kazune-waon/React_Portfolio/blob/main/src/Image/WeatherApp.jpg?raw=true',
    title: 'WeatherApp',
    author: '@helloimnik',
  },
  {
    img: 'https://github.com/kazune-waon/React_Portfolio/blob/main/src/Image/album_desktop.png?raw=true',
    title: 'AlbumPage',
    author: '@nolanissac',
  },
  {
    img: 'https://github.com/kazune-waon/React_Portfolio/blob/main/src/Image/Graduation_System.jpg?raw=true',
    title: 'Graduation System',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  
];