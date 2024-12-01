import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className='inline-flex gap-2 items-center mt-8' >
      <h1 className='logo text-[25px] text-blueColor'>
        <strong> {text1}</strong>{text2}
      </h1>
      <p className='w-8 sm:w-12 h-[1px] sm:h[2px] bg-blueColor ' ></p>
    </div>
  )
}

export default Title