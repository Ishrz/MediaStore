import { useDispatch, useSelector } from "react-redux";
import { FetchGif, FetchPhotos, FetchVideos } from "../api/mediaApi";
import {
  setError,
  setQuery,
  setResults,
  setLoading,
} from "../redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";
import { Toaster } from "react-hot-toast";
import { CircleLoader  } from "react-spinners";


const ResultGrid = () => {
  const dispatch = useDispatch();
  const { activeTab, error, isLoading, query, results } = useSelector(
    (state) => state.searchRedu
  );

  let response = [];
  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(setLoading(true));
        if (activeTab == "Photos") {
          response = await FetchPhotos(query);
        }
        if (activeTab == "Videos") {
          response = await FetchVideos(query);
        }
        if (activeTab == "Gifs") {
          response = await FetchGif(query);
        }
      } catch (error) {
        console.log(error);
      }
      dispatch(setResults(response));
    };
 
    getData();
    
  }, [activeTab, query]);

  if (error) return <p>Network Error Please Try again</p>;
  if (isLoading) return <div className="w-full h-screen  grid  items-center justify-center "><CircleLoader className=" text-center text-3xl" color={"#2B7FFF"}  size={150} /></div>;
  return (
    <div className="w-full overflow-auto bg-blue-200/50 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-around gap-4  ">
      {results.map((elem) => {
        return (
          <div className="overflow-hidden rounded-2xl" key={elem.id}>
            <ResultCard elem={elem} />
          </div>
        );
      })}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ResultGrid;
