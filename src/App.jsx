import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bar  from './components/Bar'
import BasicRating from './components/BasicRating'
import TitleImageList from './components/TitleImageList'
import BasicTimeline from './components/BasicTimeline'
import NoOpposite from './components/NoOpposite'
import CustomTabPanel from './components/CustomTabPanel'



function App() {

  return (
    <>
    <CustomTabPanel />
    <h1>KAZUNE FUJIWARA</h1>
    <h2>ABOUT ME</h2>
     <TitleImageList />
     <h2>EXPERIENCE</h2>
     <NoOpposite />
     
    </>
  )
}

export default App
