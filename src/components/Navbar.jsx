import { Link } from "react-router-dom";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { useState } from "react";
const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <div className="flex items-center justify-between w-full p-5 bg-neutral-800 relative">
      <div className="">
        <Link to={"/"}>
          <div className="flex items-center  ">
            <div className="w-fit flex items-center rounded-full overflow-hidden ">
              <img
                className="w-15 mt-2 object-cover"
                src={"../logo-removebg.png"}
              />
            </div>
            <h1
              id="logoHeading"
              className=" font-bold italic  text-3xl text-shadow-red-500 text-cyan-400 shadow-2xl"
            >
              MediaStore
            </h1>
          </div>
        </Link>
      </div>
      <div className="hidden md:flex items-center justify-between gap-3  ">
        <Link
          className="px-3 py-2.5 bg-blue-400 rounded-2xl text-xl font-medium hover:bg-blue-700 active:scale-95 transition "
          to={"/"}
        >
          Search
        </Link>
        <Link
          className=" px-3 py-2.5 bg-blue-400 rounded-2xl text-xl font-medium hover:bg-blue-700 active:scale-95 transition"
          to={"/collection"}
        >
          Collection's
        </Link>
      </div>
      <div className="flex md:hidden menu-icon">
        <BsFillMenuButtonWideFill
        onClick={()=>setIsOpen(!isOpen)}
        className="text-4xl text-blue-400/90"/>
      </div>
      <div className={` bg-blue-400/90 w-[50%] absolute right-0 top-18  z-10 rounded-2xl transition-transform duration-300 ease-in-out ${isOpen? 'translate-x-full': 'translate-x-0'} p-4  md:hidden `}>
        <ul className=" text-2xl font-bold tracking-tight">
          <Link 
          className="mb-2 bg-gray-700 p-3 text-center  rounded-xl text-blue-500 hover:bg-blue-300 active:scale-95 transition block"
          to={"/"}
          >Search</Link>

          <Link  
          className="mb-2 bg-gray-700 p-3 text-center  rounded-xl text-blue-500 hover:bg-blue-300 active:scale-95 transition block"
          to={"/collection"}
          >Collection</Link >
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
