import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { assets } from '../../Assets/assets';
import Title from '../Title';

import { data } from '../../Assets/assets';


 const RemoteJobs = () => {
  return (
    <div>
      <Title text1={'Remote '} text2={'Jobs'} />
      <div className="jobContainer  flex gap-10 justify-start flex-wrap items-center py-10 overflow-x-auto sm:overflow-x-auto">
        {/* Container for scrollable job cards */}
        <div className="flex gap-6 sm:gap-10 md:gap-10 lg:gap-10 flex-nowrap  sm:flex-wrap md:flex-wrap">
          {data.map(({ id, image, title, time, location, desc, company }) => {
            return (
              <div
                key={id}
                className="group  group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg transition-all delay-75 border"
              >
                <span className="flex justify-between items-center gap-4">
                  <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white transition-all delay-75 ">
                    {title}
                  </h1>
                  <span className="flex items-center text-[#ccc] gap-1">
                    <BiTimeFive />
                    {time}
                  </span>
                </span>

                <h6 className="text-[#ccc]">{location}</h6>

                <p className="text[13px] text-[#959595] pt-[20px] mt-[20px] group-hover:text-white transition-all delay-75">
                  {desc}
                </p>

                <div className="company flex items-center gap-2">
                  <img
                    src={image}
                    alt="Company Logo"
                    className="w-[10%] h-[10%]"
                  />
                  <span className="text-[14px] py-[1rem] block group-hover:text-white transition-all delay-75">
                    {company}
                  </span>
                </div>

                <button className="bg-blueColor text-white group-hover/item:border-white border-blueColor border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor group-hover/item:text-textColor group-hover:text-white transition-all delay-75">
                  Apply Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RemoteJobs