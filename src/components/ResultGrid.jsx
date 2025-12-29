import { useDispatch, useSelector } from "react-redux"
import {FetchGif,FetchPhotos,FetchVideos} from '../api/mediaApi'
import {setError,setQuery,setResults,setLoading} from '../redux/features/searchSlice'
import { useEffect } from "react"
import ResultCard from "./ResultCard"
const ResultGrid = () => {

    const dispatch=useDispatch()
    const {activeTab,error,isLoading,query,results}=useSelector(state=>state.searchRedu)
    console.log(results)

    let response=[];
    useEffect(()=>{
    
      const getData = async() => {
        try {
      dispatch(setLoading(true))
      if (activeTab == "Photos") {
        response= await FetchPhotos(query)
      }
      if(activeTab == "Videos"){
        response= await FetchVideos(query)
      }
      if(activeTab == "Gifs"){
         response= await FetchGif(query)
      }
      } catch (error) {
        console.log(error)
      }
      dispatch(setResults(response));
    };
      

    getData();
    },[activeTab,query])

    if(error) return <p>{error}</p>
    if(isLoading) return <h1>Loading.......</h1>
  return (
    <div className='w-full overflow-auto bg-emerald-800 p-4 flex justify-around gap-2 flex-wrap'>
      {results.map((elem)=>{
        return <div className="overflow-hidden" key={elem.id}>
          <ResultCard elem={elem} />
        </div>
      } )}
    </div>
  )
}

export default ResultGrid
