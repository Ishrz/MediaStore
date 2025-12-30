import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"
import { Toaster } from "react-hot-toast"
import { clearCollection } from "../redux/features/collectionSlice"

const CollectionPage = () => {
  const dispatch=useDispatch()

  const clearAllcollection = ()=>{
    dispatch(clearCollection())
  }

  const collectionData=useSelector(state=>state.collectionRedu.items)


  return (
    <>
    <div className="bg-blue-400/40 w-full flex items-center justify-between p-4 px-5">
        <div ><h2 className="text-xl text-neutral-300 font-bold ">{collectionData? "Collection is empty" : "Saved Collection"}</h2></div>

        <div>
          <button 
          onClick={()=>clearAllcollection()}
          className="px-4 py-3 bg-red-600 text-lg rounded-2xl hover:bg-red-800 active:scale-95  ">
            Clear all
          </button>
          </div>
      </div>
    <div className='w-full min-h-[90dvh] overflow-auto bg-blue-200/50 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-around gap-4  '>
      {collectionData.map((elem)=>{
        return <div className="overflow-hidden rounded-2xl" key={elem.id}>
          <CollectionCard elem={elem} />
        </div>
      } )}
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
    </>
  )
}

export default CollectionPage
