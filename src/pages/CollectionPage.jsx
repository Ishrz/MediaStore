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
console.log(collectionData)

  return (
    <>
      <div className="bg-blue-400/40 w-full flex items-center justify-between p-4 px-5">
        {collectionData.length>0 
        ? 
        <div className="flex w-full justify-between items-center">
          <h2 className="text-2xl font-bold text-cyan-400">Collections </h2>
          <button 
          onClick={()=>clearAllcollection()}
          className="px-4 py-3 bg-red-600  rounded-2xl hover:bg-red-800 active:scale-95  text-2xl ">
            Clear all
          </button>
          </div> 
        :
        <h2 className="text-2xl text-center w-full font-bold text-cyan-400 ">Collection is Empty </h2>}
      </div>

      <div className="w-full min-h-[90dvh] overflow-auto bg-blue-200/50 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-around gap-4  ">
        {collectionData.map((elem) => {
          return (
            <div className="overflow-hidden rounded-2xl" key={elem.id}>
              <CollectionCard elem={elem} />
            </div>
          );
        })}
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
}

export default CollectionPage
