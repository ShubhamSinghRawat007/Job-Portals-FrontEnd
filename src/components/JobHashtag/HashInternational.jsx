import React from 'react'
import Title from '../Title'
import { InternationalCities  } from '../../Assets/assets'

const HashInternational = () => {
    const handleClick = (event) => {
        event.preventDefault();
      };

  return (
    <div className='' >
        <Title text1={'International'} text2={'Jobs'} />
        <div className='border rounded-sm p-5'>
            <ul className='flex gap-5 flex-wrap' >
                {
                    InternationalCities.map((Item,Index)=>(
                        <li key={Index} >
                            <a className='text-blueColor' onClick={handleClick} href="">#{Item}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default HashInternational