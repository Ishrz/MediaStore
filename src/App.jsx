import React from 'react'
import {FetchGif, FetchPhotos,FetchVideos} from './api/mediaApi'
import './App.css'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
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
    <div className='bg-black h-screen w-full text-white'>
      {/* <button onClick={photoBtn} className='m-2 px-4 py-3 bg-red-300 rounded-2xl active:scale-95'>Fetch photos</button>
      <button onClick={videoBtn} className='m-2 px-4 py-3 bg-red-300 rounded-2xl active:scale-95'>Fetch Videos</button>
      <button onClick={gifBtn} className='m-2 px-4 py-3 bg-red-300 rounded-2xl active:scale-95'>Fetch Gif</button> */}

      <SearchBar/>
      <Tabs/>

    </div>
  )
}

export default App
