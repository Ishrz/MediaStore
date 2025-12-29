import React from 'react'
import {FetchGif, FetchPhotos,FetchVideos} from './api/mediaApi'
import './App.css'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import { Route, Routes } from 'react-router-dom'
const App = () => {

  // const photoBtn=async()=>{
  //   const data=await FetchPhotos('cat')
  // console.log(data)
  // }

  // const videoBtn=async()=>{
  //   const data=await FetchVideos('nature')
  //   console.log(data)
  // }

  // const gifBtn = async()=>{
  //   const data=await FetchGif('cat')
  //   console.log(data)
  // }


  
  return (
    <div className='bg-black min-h-screen w-full text-white'>
     
     <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/collection' element={<CollectionPage/>} />
     </Routes>
      

    </div>
  )
}

export default App
