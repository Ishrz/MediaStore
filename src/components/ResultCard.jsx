
const ResultCard = ({elem}) => {
    // console.log(elem.src)
  return (
    <div className="w-[20vw] overflow-hidden  shrink-0 bg-gray-600">
      <div className="img-container w-full rounded-full">
        {elem.type=='photo' ? <img 
        className="w-full object-cover h-full  " 
        src={elem.src}
         />: ''}
         {elem.type=='Video'? <video autoPlay muted 
        className="w-full object-cover h-full  " 
        src={elem.src}
         ></video> :''}
         {elem.type=='Gif' ? <img 
        className="w-full object-cover h-full  " 
        src={elem.src}
         alt={elem.tittle}
         />: ''}
        
      </div>
    </div>
  );
};

export default ResultCard;
