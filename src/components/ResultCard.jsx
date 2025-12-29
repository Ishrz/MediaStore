
const ResultCard = ({elem}) => {
    // console.log(elem.src)
  return (
    <div className=" h-80 relative rounded-2xl overflow-hidden bg-gray-600 my-4 ">
      <a href={elem.url} target="_blank" className="card-container  h-full w-full rounded-full ">
        {elem.type=='photo' ? <img 
        className="w-full object-cover h-full  object-center " 
        src={elem.src}
         />: ''}
         {elem.type=='Video'? <video autoPlay muted 
        className="w-full object-cover h-full object-center  " 
        src={elem.src}
         ></video> :''}
         {elem.type=='Gif' ? <img 
        className="w-full object-cover h-full object-center line-clamp-2 " 
        src={elem.src}
         alt={elem.tittle}
         />: ''}
      </a>
      <div id="bottom-title" className="flex items-center justify-between px-4 text-neutral-300 absolute bottom-0 line-clamp-2  w-full h-[30%] px-2 py-2">
        <h1 className="font-bold capitalize">{elem.tittle}</h1>
        <button className="bg-blue-400 active:scale-95 hover:bg-blue-600 px-4 py-2.5 rounded-lg text-center">save</button>
      </div>
    </div>
  );
};

export default ResultCard;
