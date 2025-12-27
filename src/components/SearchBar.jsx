import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setQuery } from "../redux/features/searchSlice"

const SearchBar = () => {
    const [searchVal,setSearchVal] = useState('')

    const dispatch=useDispatch()
    const sliceQuery=useSelector(state=>state.searchRedu.query)

    const changeHandler= (evt)=>{
        setSearchVal((prev)=> prev=evt.target.value)
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(setQuery(searchVal))

        setSearchVal('')
    }

    // useEffect(()=>{
    //     console.log(sliceQuery)
    // },[])


  return (
    <div className=" w-full h-20 flex items-center bg-emerald-500 px-4">
      <form onSubmit={submitHandler} className="flex gap-3">
        <input value={searchVal} onChange={changeHandler} className="border-neutral-900 border px-4 py-3 bg-neutral-600 rounded-2xl" type="text" placeholder="Search Anything"></input>

        <button className="border-neutral-900 border px-4 py-3 bg-blue-500 rounded-2xl active:scale-95">Search</button>
      </form>
    </div>
  )
}

export default SearchBar
