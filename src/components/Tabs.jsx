import { useDispatch, useSelector } from "react-redux"
import { setActiveTab } from "../redux/features/searchSlice"
import { useEffect } from "react"
const Tabs = () => {
    const dispatch=useDispatch()
    const Tabs=['Photos','Videos','Gifs']

    const activeVal=useSelector(state=>state.searchRedu.activeTab)


    useEffect(()=>{
        console.log(activeVal)
    },[activeVal])

  return (
    <div className='bg-emerald-600 w-full px-3 py-2 flex items-center justify-center space-x-3.5'>
      {Tabs.map((elem,index)=> (
        <button 
         onClick={()=>dispatch(setActiveTab(elem))}
         key={index}
         className={`${activeVal==elem? 'bg-blue-400':'bg-red-400'} px-3 py-2 font-medium  rounded-2xl text-lg active:scale-95 text-center text-black`}
         >{elem}</button>
      ))}

    </div>
  )
}

export default Tabs
