import React, { useContext } from 'react';
import { NextPage } from 'next';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// importing components
import RandomProfileBody from './randomProfileBody';
import WhoToFollow from '../Profile/WhoToFollow';
// context
import { NavContext } from 'context/NavContext';

const RandomProfile:NextPage<{user:any}> = ({user}) => {
  // context deconstruct
  const [navIndex,setNavIndex] = useContext(NavContext)
    
  return (
    <div className='border-[1px] border-[#00000310] w-[45%] lg:w-full mx-[1rem]  lg:ml-[5rem] md:ml-[0rem]'>
        <div className="p-[1rem] text-[1.2rem] font-bold flex items-center">
            <FontAwesomeIcon onClick={() => setNavIndex(0)} className='cursor-pointer' icon={faArrowLeft}/>
        </div>
        <RandomProfileBody user={user}/>
        <WhoToFollow/>
    </div>
  )}

export default RandomProfile