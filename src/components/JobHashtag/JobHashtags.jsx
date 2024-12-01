import React from 'react'
import HashIndia from './HashIndia'
import HashInternational from './HashInternational'

const JobHashtags = () => {
  return (
    <div className='flex gap-5 sm:flex-nowrap flex-wrap' >
        <HashIndia/>
        <HashInternational/>
    </div>
  )
}

export default JobHashtags