import React from 'react';
import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import { assets } from '../../Assets/assets';
export const Search = () => {
  const [visible,setVisible] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="searchDiv grid gap-1 bg-greyIsh rounded-[10px] p-[2rem] lg:p-[2rem] sm:p-[1rem]">
      {/* Form Section */}
      <form >
        <div className="firstDiv flex flex-wrap justify-between items-center rounded-[8px] gap-4 bg-white p-3 shadow-lg shadow-greyIsh-700">

          {/* Search by Job */}
          <div className="flex gap-8 items-center  flex-grow  sm:w-full">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-full"
              placeholder="Search Job Here..."
            />

            {/* Search Button */}
            <button className="text-blueColor font-semibold h-full px-2 py-2 sm:px-6 rounded-[10px] cursor-pointer hover:bg-blue-600  hover:text-white  sm:mt-3">
              Search
            </button>
          </div>
          <hr className=' h-1 w-full' />
          <div className='flex gap-2 sm:gap-5  '>
          <button  className="bg-blueColor  h-full px-6 py-2 rounded-[10px] text-white cursor-pointer hover:bg-blue-300  sm:mt-3">
            All Jobs
          </button>
          <button type='button' onClick={()=> setVisible(!visible)} 
          className="bg-blueColor sm:hidden    h-full px-6 py-2 rounded-[10px] text-white cursor-pointer sm:hover:bg-blue-300  sm:mt-3">
           Filter <span><img src={assets.dropdown_icon} className={`w-2 ml-2 inline  ${visible?'-rotate-90':'rotate-90'}  `} alt="" /></span>
          </button>
          </div>
        </div>
      </form>


   
      {/* Filter Section */}
      <div className={` ${visible?'flex':'hidden '} sm:flex secDiv flex-wrap items-center gap-5 justify-center mt-10 sm:gap-5`}>
        {/* Sort By */}
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className="text-[#80808080] font-semibold">
            Sort by:
          </label>
          <select
            name=""
            id="relevance"
            className="bg-white rounded-[3px] px-4  py-1 w-full"
          >
            <option className='' value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>
          </select>
        </div>

        {/* Type */}
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className="text-[#80808080] font-semibold">
            Type:
          </label>
          <select
            name=""
            id="type"
            className="bg-white rounded-[3px] px-4 py-1 w-full"
          >
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-time</option>
          </select>
        </div>

        {/* Level */}
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="level" className="text-[#80808080] font-semibold">
            Level:
          </label>
          <select
            name=""
            id="level"
            className="bg-white rounded-[3px] px-4 py-1 w-full"
          >
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>
          </select>
        </div>

        {/* Clear All */}
       
      </div>
    </div>
  );
};
