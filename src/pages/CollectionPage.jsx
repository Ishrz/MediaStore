import { useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"

const CollectionPage = () => {
  const collectionData=useSelector(state=>state.collectionRedu.items)
  return (
    <div className='w-full min-h-[90dvh] overflow-auto bg-blue-200/50 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-around gap-4  '>
      {collectionData.map((elem)=>{
        return <div className="overflow-hidden rounded-2xl" key={elem.id}>
          <CollectionCard elem={elem} />
        </div>
      } )}
    </div>
  )
}

export default CollectionPage
