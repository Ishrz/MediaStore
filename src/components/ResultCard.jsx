import { FiExternalLink } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addCollection } from "../redux/features/collectionSlice";
import { useEffect } from "react";

const ResultCard = ({ elem }) => {

  const dispatch=useDispatch()
  const collectionState=useSelector(state=>state.collectionRedu)
  const saveToCollection = (saveElem) =>{
    console.log("before storing")
    console.log(collectionState)


    dispatch(addCollection(saveElem))
    


    console.log("after storing storing")
    
  }

  // useEffect(()=>{
  //   console.log(collectionState)
  // },[collectionState])

  // console.log(elem.src)
  return (
    <div className=" h-80 relative rounded-2xl overflow-hidden group bg-gray-600 my-4 ">
      <div className="absolute inset-0 bg-blue-900/50 transition-opacity duration-300 backdrop-blur-xs w-full h-[full] opacity-0 group-hover:opacity-70 rounded-2xl flex items-center justify-center">
        <a href={elem.url} target="_blank">
          <FiExternalLink className="text-5xl cursor-pointer hover:scale-105 transition-transform duration-300 shadow-2xl" />
        </a>
      </div>
      <div className="card-container  h-full w-full rounded-full ">
        {elem.type == "photo" ? (
          <img
            className="w-full object-cover h-full  object-center "
            src={elem.src}
          />
        ) : (
          ""
        )}
        {elem.type == "Video" ? (
          <video
            autoPlay
            muted
            className="w-full object-cover h-full object-center  "
            src={elem.src}
          ></video>
        ) : (
          ""
        )}
        {elem.type == "Gif" ? (
          <img
            className="w-full object-cover h-full object-center line-clamp-2 "
            src={elem.src}
            alt={elem.tittle}
          />
        ) : (
          ""
        )}
      </div>

      <div
        id="bottom-title"
        className="flex items-center justify-between px-4 text-neutral-300 absolute bottom-0 line-clamp-2  w-full h-[30%]  py-2"
      >
        <h1 className="font-bold capitalize">{elem.tittle}</h1>
        <button 
        onClick={()=>saveToCollection(elem)}
        className="bg-blue-500 active:scale-95 hover:bg-blue-600 px-4 py-2.5 rounded-lg text-center">
          save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
