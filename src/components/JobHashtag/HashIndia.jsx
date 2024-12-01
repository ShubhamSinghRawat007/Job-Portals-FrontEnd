import React from 'react'
import Title from '../Title'
import { IndiaCities  } from '../../Assets/assets'
const HashIndia = () => {

    const handleClick = (event) => {
        event.preventDefault(); // Prevents the default behavior of <a> tag
      
      };

  return (
    <div className='' >
        <Title text1={'Job'} text2={'India'} />
        <div className='border rounded-sm p-5'>
            <ul className='flex gap-5 flex-wrap' >
                {
                    IndiaCities.map((Item,Index)=>(
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

export default HashIndia