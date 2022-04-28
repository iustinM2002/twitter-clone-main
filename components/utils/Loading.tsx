import React from 'react';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
const Loading = () => {
  return (
    <div className='bg-white w-full min-h-[100vh] fixed flex justify-center items-center top-0 left-0 z-30'>
        <FontAwesomeIcon className='text-[#1D9BF0] w-[70px] h-[70px]  lg:w-[50px] animate-ping' icon={faTwitter}/>
        <FontAwesomeIcon className='text-[#1D9BF0] w-[70px] h-[70px]  lg:w-[50px] absolute' icon={faTwitter}/>
    </div>
  )
}

export default Loading