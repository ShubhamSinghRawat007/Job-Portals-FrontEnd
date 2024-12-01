import React from 'react';
import simple from '../../Assets/simple.png';
import better from '../../Assets/Better.png';
import trust from '../../Assets/trust.png';

export const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-full sm:w-[400px] block'>
        The value that holds us true and to account
      </h1>

      <div className='grid gap-[3rem] sm:gap-[10rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center'>
        {/* First Grid Item */}
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={simple} alt='' className='w-[70%]' />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>Simplicity</span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            Things being made beautifully simple are at the heart of everything we do.
          </p>
        </div>

        {/* Second Grid Item */}
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={better} alt='' className='w-[70%]' />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>Success</span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            We believe in making things better for everyone, even if just by a bit!
          </p>
        </div>

        {/* Third Grid Item */}
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={trust} alt='' className='w-[70%]' />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>Trust</span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            We work on the basis of creating trust, which can be nurtured through authenticity and transparency.
          </p>
        </div>
      </div>

      {/* Card Section */}
      <div className='card mt-[2rem] flex flex-col sm:flex-row justify-between bg-blueColor p-[5rem] rounded-[10px]'>
        <div>
          <h1 className='text-blueColor text-[30px] font-bold'>
            Ready to switch a career
          </h1>
          <h2 className='text-textColor text-[25px] font-bold'>Let's get started!</h2>
        </div>

        <div>
          <button className='border-[2px] rounded-[10px] py-[40px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
