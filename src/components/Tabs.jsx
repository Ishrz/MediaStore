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
    <div className='bg-blue-400/70 w-full px-3 py-2 flex items-center justify-center space-x-3.5'>
      {Tabs.map((elem,index)=> (
        <button 
         onClick={()=>dispatch(setActiveTab(elem))}
         key={index}
         className={`${activeVal==elem? 'bg-blue-500':'bg-neutral-700'} px-3 py-2 font-medium  rounded-2xl text-lg active:scale-95 text-center text-neutral-200`}
         >{elem}</button>
      ))}

    </div>
  )
}

export default Tabs
