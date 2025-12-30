import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full p-5 bg-neutral-800">
      <div className="">
        <Link to={'/'}><h1 className=" font-bold text-3xl text-shadow-red-500 text-cyan-400 shadow-2xl">
        MediaSearch
      </h1></Link>
      </div>
      <div className='flex items-center justify-between gap-3'>
        <Link className='px-3 py-2.5 bg-blue-400 rounded-2xl text-xl font-medium hover:bg-blue-700 active:scale-95 transition ' to={'/'}>Search</Link>
        <Link className='px-3 py-2.5 bg-blue-400 rounded-2xl text-xl font-medium hover:bg-blue-700 active:scale-95 transition' to={'/collection'}>Collection's</Link>
      </div>
    </div>
  );
};

export default Navbar;
