
const ResultCard = ({elem}) => {
    // console.log(elem.src)
  return (
    <div className="w-[18vw] h-80 relative bg-gray-600">
      <div className="card-container h-full w-full rounded-full ">
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
      </div>
      <div id="bottom-title" className="text-neutral-300 absolute bottom-0 line-clamp-2  w-full h-[20%] px-2 py-2">
        <h1 className="font-bold capitalize">{elem.tittle}</h1>
      </div>
    </div>
  );
};

export default ResultCard;
