import { useDispatch, useSelector } from "react-redux"
import {FetchGif,FetchPhotos,FetchVideos} from '../api/mediaApi'
import {setError,setQuery,setResults,setLoading} from '../redux/features/searchSlice'
import { useEffect } from "react"
const ResultGrid = () => {

    const {activeTab,error,isLoading,query,results}=useSelector(state=>state.searchRedu)
    console.log(query)

    let response;
    useEffect(()=>{
    const getData = async() => {
      if (activeTab == "Photos") {
        response= await FetchPhotos(query)
      }
      if(activeTab == "Videos"){
        response= await FetchVideos(query)
      }
      if(activeTab == "Gifs"){
         response= await FetchGif()
      }
      console.log(response)
    };


    getData();
    },[,activeTab,query])
  return (
    <div className='w-full h-1/2 bg-emerald-800 p-4'>
      <button onClick={()=>FetchPhotos} className="p-5 bg-amber-300">fetch</button>
    </div>
  )
}

export default ResultGrid
